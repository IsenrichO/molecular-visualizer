import React, { Component } from 'react';


export default class ChemicalElement extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <td key={ `ElementNo.${index}`}>
        { !!element && element.symbol ? element.symbol : null }
      </td>
    );
  }
};
