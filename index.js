const cyclotron = (particle, matrix) => {
  const lines = [];
  const particles = ["e", "p", "n"];
  for (let i = 0; i < matrix; i += 1) {
    const line = [];
    if (particles.includes(particle)) {
    } else {
      withoutParticle(line, matrix);
    }
    lines.push(line);
  }
  const cyclotron = (particle, matrix) => {};

  const withoutParticle = (matrix) => {
    const lines = [];
    for (let i = 0; i < matrix; i += 1) {
      const line = [];
      for (let index = 0; index < matrix; index += 1) {
        line.push(1);
      }
      lines.push(line);
    }
    return lines;
  };

  const electronParticle = (matrix) => {
    const lines = [];
    for (let i = 0; i < matrix; i += 1) {
      const line = [];
      if (i === 0) {
        line.push(..."e".repeat(matrix).split(""));
      } else {
        for (let index = 0; index < matrix; index += 1) {
          index < matrix - 1 ? line.push(1) : line.push("e");
        }
      }
      lines.push(line);
    }
    return lines;
  };

  const neutronParticle = (matrix) => {
    const lines = [];
    for (let i = 0; i < matrix; i += 1) {
      const line = [];
      if (i === 0) {
        line.push(..."n".repeat(matrix).split(""));
      } else {
        line.push(..."1".repeat(matrix).split(""));
      }
      lines.push(line);
    }
    return lines;
  };

  const protonParticle = (matrix) => {
    const lines = [];
    for (let i = 0; i < matrix; i += 1) {
      const line = [];
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
      lines.push(line);
    }
    return lines;
  };

  // withoutParticle(4).forEach((line) => console.log(line));
  // console.log("--------------------");
  // electronParticle(4).forEach((line) => console.log(line));
  // console.log("--------------------");
  // neutronParticle(4).forEach((line) => console.log(line));
  // console.log("--------------------");
  protonParticle(6).forEach((line) => console.log(line));
};

const withoutParticle = (line, matrix) => {
  for (let index = 0; index < matrix; index += 1) {
    line.push(1);
  }
};

const electronParticle = (matrix) => {
  const lines = [];
  for (let i = 0; i < matrix; i += 1) {
    const line = [];
    if (i === 0) {
      line.push(..."e".repeat(matrix).split(""));
    } else {
      for (let index = 0; index < matrix; index += 1) {
        index < matrix - 1 ? line.push(1) : line.push("e");
      }
    }
    lines.push(line);
  }
  return lines;
};

const neutronParticle = (matrix) => {
  const lines = [];
  for (let i = 0; i < matrix; i += 1) {
    const line = [];
    if (i === 0) {
      line.push(..."n".repeat(matrix).split(""));
    } else {
      line.push(..."1".repeat(matrix).split(""));
    }
    lines.push(line);
  }
  return lines;
};

const protonParticle = (matrix) => {
  const lines = [];
  for (let i = 0; i < matrix; i += 1) {
    const line = [];
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
    lines.push(line);
  }
  return lines;
};

// withoutParticle(4).forEach((line) => console.log(line));
// console.log("--------------------");
// electronParticle(4).forEach((line) => console.log(line));
// console.log("--------------------");
// neutronParticle(4).forEach((line) => console.log(line));
// console.log("--------------------");
protonParticle(6).forEach((line) => console.log(line));
