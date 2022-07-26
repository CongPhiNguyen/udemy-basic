const underScoreToCamelCase = (underScore) => {
  let splitString = underScore.toLowerCase().trim().split("_");
  // console.log(splitString);
  let res = "";
  splitString.forEach((value, index) => {
    if (index != 0) {
      res += value[0].toUpperCase() + value.slice(1);
    } else res += value;
  });
  console.log(res);
};

underScoreToCamelCase("underscore_case");
underScoreToCamelCase(" first_name");
underScoreToCamelCase("Some_Variable");
underScoreToCamelCase(" calculate_AGE");
underScoreToCamelCase("delayed_departure");
