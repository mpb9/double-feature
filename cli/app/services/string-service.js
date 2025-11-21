export function toLowerCaseDash(input = "") {
  let dashed = "";

  let regexed = input.replaceAll(/[^a-zA-Z0-9- ]/g, "");
  regexed = regexed.replaceAll(" ", "-");
  regexed = regexed.toLowerCase();

  let charArr = regexed.split("");

  let prevWasDash = false;

  charArr.forEach((c) => {
    if (c === "-") {
      if (!prevWasDash) {
        dashed += c;
        prevWasDash = true;
      }
    } else {
      dashed += c;
      prevWasDash = false;
    }
  });

  return dashed;
}

export function toLowerCaseUnderscore(input = "") {
  let underscored = "";

  let regexed = input.replaceAll(/[^a-zA-Z0-9- ]/g, "");
  regexed = regexed.replaceAll(/[- ]/g, "_");
  regexed = regexed.toLowerCase();

  let charArr = regexed.split("");

  let prevWasUnderscore = false;

  charArr.forEach((c) => {
    if (c === "_") {
      if (!prevWasUnderscore) {
        underscored += "_";
        prevWasUnderscore = true;
      }
    } else {
      underscored += c;
      prevWasUnderscore = false;
    }
  });

  return underscored;
}
