const highestTempt = [17, 21, 23];

const printForecast = (highestTempt) => {
  highestTempt.forEach((val, index) => {
    console.log(`${val} in ${index + 1} days...`);
  });
};

printForecast(highestTempt);
