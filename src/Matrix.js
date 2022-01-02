import React, { Component } from 'react';
import Cell from './Cell'

export default class Matrix extends Component {
  
  genRow = (vals) => {
    console.log(vals)
    return vals.map((val, i) => <Cell  key={i} value={val} className="cell"></Cell>) // replace me and render a cell component instead!
  }
  // key={i} value={val} className="cell" can be omitted..why?
  
  genMatrix = () => {
    console.log(this.props.values)
    return this.props.values.map((rowVals, i) => <div className="row" key={i}>{this.genRow(rowVals)}</div>)
  }
  //takes in "values" attribute from index.js, and maps over elements in "pattern1" - rowVals can be any name you give it!
// i is just the index number of each element

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

