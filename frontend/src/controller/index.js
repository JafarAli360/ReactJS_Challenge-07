export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

export const populateCars = (cars) => {
  return cars.map((car) => {
    const availableAt = randomDate(new Date(2022, 5, 25), new Date(2022, 6, 5)).toISOString();

    return {
      ...car,
      availableAt,
      driver: ["withDriver", "noDriver"][Math.floor(Math.random() * ["withDriver", "noDriver"].length)],
    };
  });
};
