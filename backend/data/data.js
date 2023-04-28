const walletAddress = require("./walletAddress");

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

let accounts = [
  "0x14791697260E4c9A71f18484C9f997B308e59325",
  "0x2e988A386a799F506693793c6A5AF6B54dfAaBfB",
  "0x8EB132386eB53369F4dF63935BEd5E14F3448c4C",
  "0x6F99574a3C5f8CbdDc05942e8Ab5603C12D59CC0",
  "0x10B3D6044aDAB2a666dFC1e191FB05353EfAB119",
  "0x90e11BdA55c88e6818b0303dE875B047fc4A47fB",
  "0xd9712448685B63c5A198e7E6D6C290c5402e2e04",
  "0xe42E27F5fF6DEC5F80Fdad07c4158254ab17D26f",
  "0x5F44bcC2A1397F1c5311fA5190C26C588310841F",
  "0x471f3ccc22dE1c40e8f19365610D7bEb17d819bF",
  "0xAf6D46d1E55AA87772Fb1538FE4d36AAA70f4e06",
  "0x5046d81762c5ee6E75F4730AFa5053d95Ec20d69",
  "0xB169f3aa155CAC3BA6442C38df5C0CC4ac9dd3aC",
  "0x3a384aa41E2EE36c6469a5cbAdD7AAf82f25C908",
  "0x196f491454Ea8ae2cAfd49c8058A6051bbe9E03c",
  "0x1ccB2952183679fC40DA0f6A653554820fc99135",
  "0x7B585A60a9aB2e94BA2bf91ede7E4a6689B8eD3E",
  "0xD981a279b585C16c07118EE39bb0F3bD01e44CD5",
  "0xC7744519d06a06c9EfC0F76EF813959Ed2551377",
  "0xA88652cE2B2DfA3e2bD3524a2c77c6EA5F199372",
];

// create object key by accounts array
walletData = walletData.reduce((acc, cur, i) => {
  acc[accounts[i]] = { ...cur, walletAddress: accounts[i] };
  return acc;
}, {});

module.exports = walletData;
