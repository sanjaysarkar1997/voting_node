let walletData = [
  {
    phoneNo: "1234567890",
    name: "John Doe (Chairperson)",
    otp: 1111,
  },
  {
    phoneNo: "1234567891",
    name: "Jane Doe",
    otp: 2222,
  },
  {
    phoneNo: "1234567892",
    name: "John Smith",
    otp: 3333,
  },
  {
    phoneNo: "1234567893",
    name: "Jane Smith",
    otp: 4444,
  },
  {
    phoneNo: "1234567894",
    name: "Natish Rana",
    otp: 5555,
  },
  {
    phoneNo: "1234567895",
    name: "Jui Rana",
    otp: 6666,
  },
  {
    phoneNo: "1234567896",
    name: "Rajesh Rana",
    otp: 7777,
  },
  {
    phoneNo: "1234567897",
    name: "Rajeshwari Rana",
    otp: 8888,
  },
  {
    phoneNo: "1234567898",
    name: "John Wick",
    otp: 9999,
  },
  {
    phoneNo: "1234567899",
    name: "Robin Wick",
    otp: 0000,
  },
];

let accounts = [
  "0x285155e20Ba1C5661C7F3A35D1B0e3605597EE91",
  "0x05Bb162Ef6c85328797353E85b76720f82847932",
  "0x2171D27A2EB15337a079400B1Dc41781512fDadA",
  "0xE548eb2CD28e800939A852272276928f77D46B07",
  "0x99a628e5619acEC7064418d51f8Ce849b956dE20",
  "0x2cE368662D1574B4553DA1fA9d961E32aBb50205",
  "0x794C4483fFa426745b673A13a3d174a7B9DbFdCa",
  "0x4f60620EDa5b1c7cab99e829a0298B9fA6BCF354",
  "0xcB96FAA691881263a7352D5f3F64812369Ee7c09",
  "0x80066f436d522c6f025e92e41b98BfA7E7b51794",
];

// create object key by accounts array
walletData = walletData.reduce((acc, cur, i) => {
  acc[accounts[i]] = cur;
  return acc;
}, {});

module.exports = walletData;
