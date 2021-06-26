type StringOrNum = string | number;
type objWithName = { name: string; uid: StringOrNum };

const logDetails = (uid: StringOrNum) => {
  console.log(uid);
};

const greet = (user: objWithName) => {
  console.log(`${user.name} says hello
  `);
};
