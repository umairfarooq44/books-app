const connectDots = (input) => {
  const lines = input
    .split('\n')
    .filter((val) => !!val)
    .map((val) => val.split(''));

  const positions = {};

  lines.forEach((line, i) => {
    line.forEach((val, j) => {
      if (val !== ' ') {
        positions[val] = { i, j };
      }
    });
  });

  const positionKeys = Object.keys(positions).sort();

  positionKeys.slice(0, -1).forEach((key, i) => {
    const { i: startX, j: startY } = positions[key];
    const { i: desX, j: desY } = positions[positionKeys[i + 1]];

    if (startX === desX) {
      let j = startY;
      while (j !== desY) {
        lines[startX][j] = '*';
        j = startY < desY ? j + 1 : j - 1;
      }
      lines[startX][j] = '*';
    } else if (startY === desY) {
      let j = startX;
      while (j !== desX) {
        lines[j][startY] = '*';
        j = startX < desX ? j + 1 : j - 1;
      }
      lines[j][startY] = '*';
    } else {
      let currentX = startX;
      let currenty = startY;
      while (currentX !== desX && currenty !== desY) {
        lines[currentX][currenty] = '*';
        currentX = startX < desX ? currentX + 1 : currentX - 1;
        currenty = startY < desY ? currenty + 1 : currenty - 1;
      }
      lines[currentX][currenty] = '*';
    }
  });

  const resLines = lines.map((line) => line.join(''));
  return `\n${resLines.join('\n')}\n`;
};

module.exports = connectDots;
