let walletData = [
  {
    phoneNo: "1234567890",
    name: "John Doe (Chairperson)",
    otp: 1111,
    email: "abc@gmail.com",
  },
  {
    phoneNo: "1234567891",
    name: "Jane Doe",
    otp: 2222,
    email: "sanjaysarkar430@gmail.com",
  },
  {
    phoneNo: "1234567892",
    name: "John Smith",
    otp: 3333,
    email: "sanjaysarkar430@gmail.com",
  },
  {
    phoneNo: "1234567893",
    name: "Jane Smith",
    otp: 4444,
    email: "sanjaysarkar430@gmail.com",
  },
  {
    phoneNo: "1234567894",
    name: "Natish Rana",
    otp: 5555,
    email: "sanjaysarkar430@gmail.com",
  },
  {
    phoneNo: "1234567895",
    name: "Jui Rana",
    otp: 6666,
    email: "sanjaysarkar430@gmail.com",
  },
  {
    phoneNo: "1234567896",
    name: "Rajesh Rana",
    otp: 7777,
    email: "sanjaysarkar430@gmail.com",
  },
  {
    phoneNo: "1234567897",
    name: "Rajeshwari Rana",
    otp: 8888,
    email: "sanjaysarkar430@gmail.com",
  },
  {
    phoneNo: "1234567898",
    name: "John Wick",
    otp: 9999,
    email: "sanjaysarkar430@gmail.com",
  },
  {
    phoneNo: "1234567899",
    name: "Robin Wick",
    otp: 0000,
    email: "sanjaysarkar430@gmail.com",
  },
];

let accounts = [
  "0x9aF8aA8602c470A84909839f12f70e816d59a77F",
  "0x9f9Aa2Bf57782AaDC56E197c7667b3EEcbA63E9B",
  "0xf5d52E9185e35c7Df6A89f82330986cD937CC84B",
  "0x2fBebE95477C1f0fa30f24F7aa94ADb9A362fE9F",
  "0x9E1C0a6896a71a40C41966C65f88E02Aa75d4ff7",
  "0xF9cB3B9fb5C0c4C547997327E70bBA97dC338801",
  "0xd057C83DE56674cD33C4Ca0f2fc64e1C148073F4",
  "0x56257fdfC76eE36327e5E7706345eC2cb04f18eD",
  "0xa388429B17FF5d36C73FDE50088daa45C9Ae828b",
  "0x253F863cb2f8380e5C90a82899458f589bf71677",
];
// create object key by accounts array
walletData = walletData.reduce((acc, cur, i) => {
  acc[accounts[i]] = cur;
  return acc;
}, {});

module.exports = walletData;
