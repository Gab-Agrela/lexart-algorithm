const cyclotron = (particle, matrix) => {
  const lines = [];
  throwError(particle, matrix);
  for (let i = 0; i < matrix; i += 1) {
    const line = [];
    if (particle) {
      functions[particle](i, line, matrix);
    } else {
      withoutParticle(line, matrix);
    }
    lines.push(line);
  }
  return lines;
};

const functions = {
  n: (i, line, matrix) => neutronParticle(i, line, matrix),
  e: (i, line, matrix) => electronParticle(i, line, matrix),
  p: (i, line, matrix) => protonParticle(i, line, matrix),
};

const withoutParticle = (line, matrix) => {
  for (let index = 0; index < matrix; index += 1) {
    line.push(1);
  }
};

const neutronParticle = (i, line, matrix) => {
  if (i === 0) {
    line.push(..."n".repeat(matrix).split(""));
  } else {
    line.push(..."1".repeat(matrix).split(""));
  }
};

const electronParticle = (i, line, matrix) => {
  if (i === 0) {
    line.push(..."e".repeat(matrix).split(""));
  } else {
    for (let index = 0; index < matrix; index += 1) {
      index < matrix - 1 ? line.push(1) : line.push("e");
    }
  }
};

const protonParticle = (i, line, matrix) => {
  for (let index = 0; index < matrix; index += 1) {
    if (i === 0) {
      line.push("p");
    } else if (i < matrix - 2) {
      index === 0 || index === matrix - 1 ? line.push("p") : line.push(1);
    } else if (i === matrix - 2) {
      index === 0 || index >= matrix - 2 ? line.push("p") : line.push(1);
    } else {
      index !== matrix - 1 ? line.push("p") : line.push(1);
    }
  }
};

const throwError = (particle, matrix) => {
  if (matrix < 4) {
    throw new Error(
      "Invalid arguments: matrix must be greater than or equal to 4."
    );
  }
  if (!["e", "p", "n", ""].includes(particle)) {
    throw new Error('Invalid arguments: particle must be "e", "p", "n" or "".');
  }
};

cyclotron("n", 6).forEach((line) => console.log(line));
