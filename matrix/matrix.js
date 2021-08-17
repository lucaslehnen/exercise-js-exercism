//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(matrix_str) {    
    
    this._rows = matrix_str.split('\n').map((row_str) => {      
      return row_str.split(' ').map((element) => Number(element));
    });    
    
    this._columns = this._rows[0].map((col, iColumn) => {
      return this._rows.map((row) => row[iColumn])
    });    
  }

  get rows() {
    return this._rows;    
  }

  get columns() {
    return this._columns;
  }
}
