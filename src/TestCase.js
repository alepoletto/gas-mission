class TestCase {
  constructor(number) {
    this.number = number;
    this.start = [];
    this.end = [];
    this.matrix = [];
  }

  setStart(start) {
    this.start = start;
  }
  setEnd(end) {
    this.end = end;
  }

  addData(row) {
    this.matrix.push(row);
  }

  getMatrix() {
    return this.matrix;
  }

  setMatrix(matrix) {
    this.matrix = matrix;
  }

  getStart() {
    return this.start;
  }

  getEnd() {
    return this.end;
  }

  getNumber() {
    return this.number;
  }
}

module.exports = TestCase;
