import React, { Component } from 'react';

import ChemicalElementData from '../constants/json/chemical-elements-data.json';


const generateEmptySlotsPTable = () => new Array(10).fill([]).map(period => new Array(19).fill(null));
  console.log(generateEmptySlotsPTable());

let newPTable = generateEmptySlotsPTable();
ChemicalElementData.forEach((datum, index, list) => {
  newPTable[datum.coords.period - 1][datum.coords.group] = datum;
});
newPTable.unshift(Array.from({ length: 19 }, (_, i) => i === 0 ? null : i));
  console.log('PTABLE:', newPTable);

export default class PeriodicTable extends Component {
  constructor() {
    super();
    this.renderGroupLabels = this.renderGroupLabels.bind(this);
    this.renderPeriodElements = this.renderPeriodElements.bind(this);
    this.erectPTable = this.erectPTable.bind(this);
  }

  renderGroupLabels(period) {
    return period.map((groupLabel, index) =>
      <td key={ `GroupLabel_${groupLabel}` }>{ groupLabel }</td>
    );
  }

  renderPeriodElements(period, periodNumber) {
    return period.map((element, index) => index === 0 && periodNumber < 8
      ? <td key={ `PeriodNo.${index + 1}` }>{ periodNumber }</td>
      : <td
          key={ `ElementNo.${index}`}
          className={ !!element && element.classes ? element.classes.join(' ') : !!element ? '' : 'empty' }>
          <i>{ !!element && element.atomicNumber ? element.atomicNumber : null }</i>
          <b>{ !!element && element.symbol ? element.symbol : null }</b>
          <span className="element-name">{ !!element && element.element ? element.element : null }</span>
        </td>
    );
  }

  erectPTable() {
    return newPTable.map((period, index, list) => index === 0
      ? <tr key={ `GroupNo.${index + 1}` }>{ this.renderGroupLabels(period) }</tr>
      : <tr key={ `PeriodNo.${index}` }>{ this.renderPeriodElements(period, index) }</tr>
    );
  }

  render() {
    return (
      <table id="ptable">
        <caption>Periodic Table of The Elements</caption>
        <tbody>
          { this.erectPTable() }
        </tbody>
      </table>
    );
  }
};
