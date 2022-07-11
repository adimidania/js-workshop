const usedStatus = () => {
  let age = 1095;
  let description;

  switch (true) {
    case age < 30:
      description = "new";
      break;
    case age >= 30 && age < 365:
      description = "lightly used";
      break;
    case age >= 365 && age < 1095:
      description = "used";
      break;
    case age >= 1095:
      description = "old";
      break;
    default:
      console.log(`There is no description for ${age}.`);
  }

  console.log(`
  Age: ${age} days
  Status: ${description}
  `);
};
