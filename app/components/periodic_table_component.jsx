import React, { Component } from 'react';

import ChemicalElementData from '../constants/json/chemical-elements-data.json';


const generateEmptySlotsPTable = () => new Array(7).fill([]).map(period => new Array(18).fill(null));
  console.log(generateEmptySlotsPTable());

let newPTable = generateEmptySlotsPTable();
ChemicalElementData.forEach((datum, index, list) => {
  newPTable[datum.coords.period - 1][datum.coords.group - 1] = datum;
});
  console.log('PTABLE:', newPTable);

export default class PeriodicTable extends Component {
  constructor() {
    super();
    this.renderPeriodElements = this.renderPeriodElements.bind(this);
    this.erectPTable = this.erectPTable.bind(this);
  }

  renderPeriodElements(period) {
    return period.map((element, index) =>
      <td key={ `ElementNo.${index}`}>{ !!element && element.symbol ? element.symbol : null }</td>
    );
  }

  erectPTable() {
    return newPTable.map((period, index, list) =>
      <tr key={ `PeriodNo.${index}` }>{ this.renderPeriodElements(period) }</tr>
    );
  }

  render() {
    return (
      <table>
        <tbody>
          { this.erectPTable() }
        </tbody>
      </table>
    );
  }
};
