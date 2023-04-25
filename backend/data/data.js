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
  "0xb7F22e404620062d4bAF68C7F4451867FFcf32ba",
  "0x2F14C9948aE9E78ad52d0A030C571C0c643544Fa",
  "0x91f9265a8Ff7513d6A19Cf4F36baE60Cc79e06a8",
  "0xd380EAC20233E920B8462B65a77caF8c7B6f6c40",
  "0xb21127142Ae60BB757D813e898f93a71bF37AA59",
  "0xd72907e872f345b5381442a2426ae58b1816C8D8",
  "0x35650BCc6b2762a7fcbc9367E23E363C2bDc937D",
  "0x4B26bb0770081583a60BC3ED6Fe137a6485ab9E7",
  "0x623bFe7458DCB54daD499E23A76B90BD4d828564",
  "0xc26C0CECCA59Fd581f4B54cc22fAcbe86EA5FDA7",
];
// create object key by accounts array
walletData = walletData.reduce((acc, cur, i) => {
  acc[accounts[i]] = cur;
  return acc;
}, {});

module.exports = walletData;
