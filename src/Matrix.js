import React, { Component } from 'react';
import Cell from './Cell'

export default class Matrix extends Component {
  
  genRow = (vals) => {
    return vals.map((val, i) => <Cell key={i} value={val} className="cell"></Cell>) // replace me and render a cell component instead!
  }
  
  genMatrix = () => {
    return this.props.values.map((rowVals,i) => <div className="row" key={i}>{this.genRow(rowVals)}</div>)
  }
  
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
  
}

Matrix.defaultProps = {
  values:[['#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00'],
    ['#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00'],
    ['#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00'],
    ['#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00'],
    ['#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00'],
    ['#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00'],
    ['#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00'],
    ['#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00'],
    ['#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00'],
    ['#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00']]
  }
//or use immediately invoked function to make it 10x10 so you only have to write array once

