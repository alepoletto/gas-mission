//check if is inside the grid and its not a block
const isSafeToTravel = (row, col, matrix) => {
  return (
    col >= 0 &&
    col < matrix[0].length &&
    row >= 0 &&
    row < matrix.length &&
    matrix[row][col] !== -1
  );
};

const findBestPath = testCase => {
  const matrix = testCase.getMatrix();
  const start = testCase.getStart();
  const end = testCase.getEnd();

  //Init auxialiary arrays with gas 0 and distance to Infinity
  const gas = Array(matrix.length);
  const dis = Array(matrix.length);
  const cells = Array(matrix.length);
  for (let i = 0; i < matrix.length; i++) {
    gas[i] = Array(matrix[0].length).fill(0);
    dis[i] = Array(matrix[0].length).fill(Infinity);
    cells[i] = Array(matrix[0].length).fill({});
  }

  let queue = [
    {
      row: start[0],
      col: start[1],
      distance: 0,
      gas: 0
    }
  ];

  gas[start[0]][start[1]] = matrix[start[0]][start[1]];
  dis[start[0]][start[1]] = 0;

  while (queue.length) {
    let cell = queue.shift();

    const neighbours = [
      [cell.row + 1, cell.col],
      [cell.row, cell.col + 1],
      [cell.row - 1, cell.col],
      [cell.row, cell.col - 1]
    ];

    // looping through all neighbours
    for (let i = 0; i < neighbours.length; i++) {
      let row = neighbours[i][0];
      let col = neighbours[i][1];

      // ignore if its not safe
      if (!isSafeToTravel(row, col, matrix)) continue;

      // if distance from current cell is smaller and the gas value is bigger, then
      // update the distance of neighbour cell
      if (
        dis[row][col] >= dis[cell.row][cell.col] + 1 &&
        gas[row][col] < gas[cell.row][cell.col] + matrix[row][col]
      ) {
        // If cell is already there in the queue we will remove it and add again with updated values
        if (dis[row][col] !== Infinity) {
          queue = queue.filter(element => {
            return element.row + '' + element.col !== row + '' + col;
          });
        }

        // update distance and gas
        dis[row][col] = dis[cell.row][cell.col] + 1;
        gas[row][col] = gas[cell.row][cell.col] + matrix[row][col];
        cells[row][col] = {
          row,
          col,
          gas: gas[row][col],
          distance: dis[row][col]
        };

        //push neighbour to the end of the queue
        queue.push({
          row,
          col,
          gas: gas[row][col],
          distance: dis[row][col]
        });
      }
    }
  }

  let result = cells[end[0]][end[1]];
  if (!result.distance) {
    return 'Mission Impossible.';
  }

  return result.gas;
};

module.exports = {
  findBestPath
};
