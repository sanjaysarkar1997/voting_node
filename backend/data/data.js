const accountsAdd = require("./accounts");

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
  {
    phoneNo: "1234567800",
    name: "John Cena",
    otp: 1234,
    email: "sanjaysarkar430@gmail.com",
  },
  {
    phoneNo: "1234567801",
    name: "Jane Cena",
    otp: 2345,
    email: "sanjaysarkar430@gmail.com",
  },
  {
    phoneNo: "1234567802",
    name: "John Abraham",
    otp: 3456,
    email: "sanjaysarkar430@gmail.com",
  },
  {
    phoneNo: "1234567803",
    name: "Jane Abraham",
    otp: 4567,
    email: "sanjaysarkar430@gmail.com",
  },
  {
    phoneNo: "1234567804",
    name: "John Snow",
    otp: 5678,
    email: "sanjaysarkar430@gmail.com",
  },
  {
    phoneNo: "1234567805",
    name: "Jane Snow",
    otp: 6789,
    email: "sanjaysarkar430@gmail.com",
  },
  {
    phoneNo: "1234567806",
    name: "Dwayne Johnson",
    otp: 7890,
    email: "sanjaysarkar430@gmail.com",
  },
  {
    phoneNo: "1234567807",
    name: "Salman Khan",
    otp: 8901,
    email: "sanjaysarkar430@gmail.com",
  },
  {
    phoneNo: "1234567808",
    name: "Shahrukh Khan",
    otp: 9012,
    email: "sanjaysarkar430@gmail.com",
  },
  {
    phoneNo: "1234567809",
    name: "Aamir Khan",
    otp: 0123,
    email: "sanjaysarkar430@gmail.com",
  },
];

let accounts = accountsAdd;

// create object key by accounts array
walletData = walletData.reduce((acc, cur, i) => {
  acc[accounts[i]] = { ...cur, walletAddress: accounts[i] };
  return acc;
}, {});

module.exports = walletData;
