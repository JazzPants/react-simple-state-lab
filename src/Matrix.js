import React, { Component } from 'react';
import Cell from './Cell'

export default class Matrix extends Component {
  
    //render each element in the row of colours, return and render a Cell component based on that!
  genRow = (vals) => {
    console.log(vals)
    return vals.map((val, i) => <Cell  value={val} key={i}  className="cell"></Cell>) // replace me and render a cell component instead!
  }
  //value property, in genRow we want "val" the single cell element color, not this.props.values array
  // key={i} value={val} className="cell" can be omitted..why?
  
  //return the rows and render them 
  genMatrix = () => {
    console.log(this.props.values)
    return this.props.values.map((rowVals, i) => <div className="row" key={i}>{this.genRow(rowVals)}</div>)
  }
//in genMatrix, loop through all the arrays of the given matrix. THEN inside each array, loop through each element with genRow
 
//MAPCEPTION

//takes in "values" attribute from index.js, and maps over elements in "pattern1" - rowVals can be any name you give it!
//rowVal is each "row" in the matrix array, which is an array itself of elements (An array which contains 10 arrays, that contain 10 elements)

//arrays in react require an identifier so:
//specify a key by index (in the array)
  // i is just the index number of each element
//keys just help react identify each element, they dont actually get passed as props to components

  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
  
}

//2D ARRAY (array of arrays)
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

// Matrix.defaultProps = {
//   values: (() => {
//     const initialRow = ['#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00']
//     return (new Array(10).fill(initialRow))
//   })()
// }
//for each element in the new Array of size 10, put in initialRow so its 10 of initialRow in the new Array
//IIFE immediately invoked function expression
//the name of this array is "values"!