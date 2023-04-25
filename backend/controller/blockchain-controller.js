const createContractInstance = require("../utils/web3");

const Web3 = require("web3");
const web3 = new Web3("http://localhost:7545");
const abi = require("./../contractABI.json");
const walletData = require("../data/data");
const jwt = require("jsonwebtoken");

let bytecode =
  "60806040523480156200001157600080fd5b50604051620025ef380380620025ef833981810160405281019062000037919062000449565b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060018060008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001819055506000600360006101000a81548160ff021916908360028111156200010857620001076200049a565b5b021790555060005b8151811015620001b257600260405180604001604052808484815181106200013d576200013c620004c9565b5b602002602001015181526020016000815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000190816200018f919062000743565b506020820151816001015550508080620001a99062000859565b91505062000110565b5050620008a6565b6000604051905090565b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200021e82620001d3565b810181811067ffffffffffffffff8211171562000240576200023f620001e4565b5b80604052505050565b600062000255620001ba565b905062000263828262000213565b919050565b600067ffffffffffffffff821115620002865762000285620001e4565b5b602082029050602081019050919050565b600080fd5b600080fd5b600067ffffffffffffffff821115620002bf57620002be620001e4565b5b620002ca82620001d3565b9050602081019050919050565b60005b83811015620002f7578082015181840152602081019050620002da565b60008484015250505050565b60006200031a6200031484620002a1565b62000249565b9050828152602081018484840111156200033957620003386200029c565b5b62000346848285620002d7565b509392505050565b600082601f830112620003665762000365620001ce565b5b81516200037884826020860162000303565b91505092915050565b600062000398620003928462000268565b62000249565b90508083825260208201905060208402830185811115620003be57620003bd62000297565b5b835b818110156200040c57805167ffffffffffffffff811115620003e757620003e6620001ce565b5b808601620003f689826200034e565b85526020850194505050602081019050620003c0565b5050509392505050565b600082601f8301126200042e576200042d620001ce565b5b81516200044084826020860162000381565b91505092915050565b600060208284031215620004625762000461620001c4565b5b600082015167ffffffffffffffff811115620004835762000482620001c9565b5b620004918482850162000416565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200054b57607f821691505b60208210810362000561576200056062000503565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620005cb7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826200058c565b620005d786836200058c565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620006246200061e6200061884620005ef565b620005f9565b620005ef565b9050919050565b6000819050919050565b620006408362000603565b620006586200064f826200062b565b84845462000599565b825550505050565b600090565b6200066f62000660565b6200067c81848462000635565b505050565b5b81811015620006a4576200069860008262000665565b60018101905062000682565b5050565b601f821115620006f357620006bd8162000567565b620006c8846200057c565b81016020851015620006d8578190505b620006f0620006e7856200057c565b83018262000681565b50505b505050565b600082821c905092915050565b60006200071860001984600802620006f8565b1980831691505092915050565b600062000733838362000705565b9150826002028217905092915050565b6200074e82620004f8565b67ffffffffffffffff8111156200076a5762000769620001e4565b5b62000776825462000532565b62000783828285620006a8565b600060209050601f831160018114620007bb5760008415620007a6578287015190505b620007b2858262000725565b86555062000822565b601f198416620007cb8662000567565b60005b82811015620007f557848901518255600182019150602085019450602081019050620007ce565b8683101562000815578489015162000811601f89168262000705565b8355505b6001600288020188555050505b505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006200086682620005ef565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036200089b576200089a6200082a565b5b600182019050919050565b611d3980620008b66000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c80639e7b8d61116100715780639e7b8d6114610168578063a3ec138d14610184578063a999e562146101b6578063b9223946146101d2578063c19d93fb146101dc578063d28178d7146101fa576100b4565b80630121b93f146100b957806306a49fce146100d55780632e4176cf146100f35780633477ee2e146101115780634c0a6af01461014257806358acfe601461014c575b600080fd5b6100d360048036038101906100ce9190610dfe565b610218565b005b6100dd6103d4565b6040516100ea9190610fc9565b60405180910390f35b6100fb6104cf565b604051610108919061102c565b60405180910390f35b61012b60048036038101906101269190610dfe565b6104f3565b6040516101399291906110a0565b60405180910390f35b61014a6105af565b005b61016660048036038101906101619190611244565b6106e0565b005b610182600480360381019061017d919061128d565b61079c565b005b61019e6004803603810190610199919061128d565b610953565b6040516101ad939291906112d5565b60405180910390f35b6101d060048036038101906101cb91906114a2565b61098a565b005b6101da610aca565b005b6101e4610bfb565b6040516101f19190611562565b60405180910390f35b610202610c0e565b60405161020f919061157d565b60405180910390f35b6001600281111561022c5761022b6114eb565b5b600360009054906101000a900460ff16600281111561024e5761024d6114eb565b5b1461028e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610285906115eb565b60405180910390fd5b6000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090506000816000015403610318576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161030f90611657565b60405180910390fd5b8060010160009054906101000a900460ff161561036a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610361906116c3565b60405180910390fd5b60018160010160006101000a81548160ff0219169083151502179055508181600201819055508060000154600283815481106103a9576103a86116e3565b5b906000526020600020906002020160010160008282546103c99190611741565b925050819055505050565b60606002805480602002602001604051908101604052809291908181526020016000905b828210156104c6578382906000526020600020906002020160405180604001604052908160008201805461042b906117a4565b80601f0160208091040260200160405190810160405280929190818152602001828054610457906117a4565b80156104a45780601f10610479576101008083540402835291602001916104a4565b820191906000526020600020905b81548152906001019060200180831161048757829003601f168201915b50505050508152602001600182015481525050815260200190600101906103f8565b50505050905090565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6002818154811061050357600080fd5b9060005260206000209060020201600091509050806000018054610526906117a4565b80601f0160208091040260200160405190810160405280929190818152602001828054610552906117a4565b801561059f5780601f106105745761010080835404028352916020019161059f565b820191906000526020600020905b81548152906001019060200180831161058257829003601f168201915b5050505050908060010154905082565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461063d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161063490611847565b60405180910390fd5b60006002811115610651576106506114eb565b5b600360009054906101000a900460ff166002811115610673576106726114eb565b5b146106b3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106aa906118b3565b60405180910390fd5b6001600360006101000a81548160ff021916908360028111156106d9576106d86114eb565b5b0217905550565b600060028111156106f4576106f36114eb565b5b600360009054906101000a900460ff166002811115610716576107156114eb565b5b14610756576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161074d906118b3565b60405180910390fd5b60005b815181101561079857610785828281518110610778576107776116e3565b5b602002602001015161079c565b8080610790906118d3565b915050610759565b5050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461082a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108219061198d565b60405180910390fd5b600160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160009054906101000a900460ff16156108ba576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108b1906119f9565b60405180910390fd5b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001541461090957600080fd5b60018060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018190555050565b60016020528060005260406000206000915090508060000154908060010160009054906101000a900460ff16908060020154905083565b60028081111561099d5761099c6114eb565b5b600360009054906101000a900460ff1660028111156109bf576109be6114eb565b5b146109ff576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109f690611a65565b60405180910390fd5b6000600360006101000a81548160ff02191690836002811115610a2557610a246114eb565b5b021790555060005b8151811015610ac65760026040518060400160405280848481518110610a5657610a556116e3565b5b60200260200101518152602001600081525090806001815401808255809150506001900390600052602060002090600202016000909190919091506000820151816000019081610aa69190611c31565b506020820151816001015550508080610abe906118d3565b915050610a2d565b5050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610b58576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b4f90611847565b60405180910390fd5b60016002811115610b6c57610b6b6114eb565b5b600360009054906101000a900460ff166002811115610b8e57610b8d6114eb565b5b14610bce576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bc5906115eb565b60405180910390fd5b6002600360006101000a81548160ff02191690836002811115610bf457610bf36114eb565b5b0217905550565b600360009054906101000a900460ff1681565b6060600280811115610c2357610c226114eb565b5b600360009054906101000a900460ff166002811115610c4557610c446114eb565b5b14610c85576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c7c90611a65565b60405180910390fd5b6000805b600280549050811015610daf578160028281548110610cab57610caa6116e3565b5b9060005260206000209060020201600101541115610d9c5760028181548110610cd757610cd66116e3565b5b906000526020600020906002020160010154915060028181548110610cff57610cfe6116e3565b5b90600052602060002090600202016000018054610d1b906117a4565b80601f0160208091040260200160405190810160405280929190818152602001828054610d47906117a4565b8015610d945780601f10610d6957610100808354040283529160200191610d94565b820191906000526020600020905b815481529060010190602001808311610d7757829003601f168201915b505050505092505b8080610da7906118d3565b915050610c89565b505090565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b610ddb81610dc8565b8114610de657600080fd5b50565b600081359050610df881610dd2565b92915050565b600060208284031215610e1457610e13610dbe565b5b6000610e2284828501610de9565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610e91578082015181840152602081019050610e76565b60008484015250505050565b6000601f19601f8301169050919050565b6000610eb982610e57565b610ec38185610e62565b9350610ed3818560208601610e73565b610edc81610e9d565b840191505092915050565b610ef081610dc8565b82525050565b60006040830160008301518482036000860152610f138282610eae565b9150506020830151610f286020860182610ee7565b508091505092915050565b6000610f3f8383610ef6565b905092915050565b6000602082019050919050565b6000610f5f82610e2b565b610f698185610e36565b935083602082028501610f7b85610e47565b8060005b85811015610fb75784840389528151610f988582610f33565b9450610fa383610f47565b925060208a01995050600181019050610f7f565b50829750879550505050505092915050565b60006020820190508181036000830152610fe38184610f54565b905092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061101682610feb565b9050919050565b6110268161100b565b82525050565b6000602082019050611041600083018461101d565b92915050565b600082825260208201905092915050565b600061106382610e57565b61106d8185611047565b935061107d818560208601610e73565b61108681610e9d565b840191505092915050565b61109a81610dc8565b82525050565b600060408201905081810360008301526110ba8185611058565b90506110c96020830184611091565b9392505050565b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61110d82610e9d565b810181811067ffffffffffffffff8211171561112c5761112b6110d5565b5b80604052505050565b600061113f610db4565b905061114b8282611104565b919050565b600067ffffffffffffffff82111561116b5761116a6110d5565b5b602082029050602081019050919050565b600080fd5b61118a8161100b565b811461119557600080fd5b50565b6000813590506111a781611181565b92915050565b60006111c06111bb84611150565b611135565b905080838252602082019050602084028301858111156111e3576111e261117c565b5b835b8181101561120c57806111f88882611198565b8452602084019350506020810190506111e5565b5050509392505050565b600082601f83011261122b5761122a6110d0565b5b813561123b8482602086016111ad565b91505092915050565b60006020828403121561125a57611259610dbe565b5b600082013567ffffffffffffffff81111561127857611277610dc3565b5b61128484828501611216565b91505092915050565b6000602082840312156112a3576112a2610dbe565b5b60006112b184828501611198565b91505092915050565b60008115159050919050565b6112cf816112ba565b82525050565b60006060820190506112ea6000830186611091565b6112f760208301856112c6565b6113046040830184611091565b949350505050565b600067ffffffffffffffff821115611327576113266110d5565b5b602082029050602081019050919050565b600080fd5b600067ffffffffffffffff821115611358576113576110d5565b5b61136182610e9d565b9050602081019050919050565b82818337600083830152505050565b600061139061138b8461133d565b611135565b9050828152602081018484840111156113ac576113ab611338565b5b6113b784828561136e565b509392505050565b600082601f8301126113d4576113d36110d0565b5b81356113e484826020860161137d565b91505092915050565b60006114006113fb8461130c565b611135565b905080838252602082019050602084028301858111156114235761142261117c565b5b835b8181101561146a57803567ffffffffffffffff811115611448576114476110d0565b5b80860161145589826113bf565b85526020850194505050602081019050611425565b5050509392505050565b600082601f830112611489576114886110d0565b5b81356114998482602086016113ed565b91505092915050565b6000602082840312156114b8576114b7610dbe565b5b600082013567ffffffffffffffff8111156114d6576114d5610dc3565b5b6114e284828501611474565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6003811061152b5761152a6114eb565b5b50565b600081905061153c8261151a565b919050565b600061154c8261152e565b9050919050565b61155c81611541565b82525050565b60006020820190506115776000830184611553565b92915050565b600060208201905081810360008301526115978184611058565b905092915050565b7f6974206d75737420626520696e20566f74696e6720506572696f640000000000600082015250565b60006115d5601b83611047565b91506115e08261159f565b602082019050919050565b60006020820190508181036000830152611604816115c8565b9050919050565b7f486173206e6f20726967687420746f20766f7465000000000000000000000000600082015250565b6000611641601483611047565b915061164c8261160b565b602082019050919050565b6000602082019050818103600083015261167081611634565b9050919050565b7f416c726561647920766f7465642e000000000000000000000000000000000000600082015250565b60006116ad600e83611047565b91506116b882611677565b602082019050919050565b600060208201905081810360008301526116dc816116a0565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061174c82610dc8565b915061175783610dc8565b925082820190508082111561176f5761176e611712565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806117bc57607f821691505b6020821081036117cf576117ce611775565b5b50919050565b7f4f6e6c79206368616972706572736f6e2063616e20737461727420616e64206560008201527f6e642074686520766f74696e6700000000000000000000000000000000000000602082015250565b6000611831602d83611047565b915061183c826117d5565b604082019050919050565b6000602082019050818103600083015261186081611824565b9050919050565b7f6974206d75737420626520696e20537461727465640000000000000000000000600082015250565b600061189d601583611047565b91506118a882611867565b602082019050919050565b600060208201905081810360008301526118cc81611890565b9050919050565b60006118de82610dc8565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036119105761190f611712565b5b600182019050919050565b7f4f6e6c79206368616972706572736f6e2063616e20676976652072696768742060008201527f746f20766f74652e000000000000000000000000000000000000000000000000602082015250565b6000611977602883611047565b91506119828261191b565b604082019050919050565b600060208201905081810360008301526119a68161196a565b9050919050565b7f54686520766f74657220616c726561647920766f7465642e0000000000000000600082015250565b60006119e3601883611047565b91506119ee826119ad565b602082019050919050565b60006020820190508181036000830152611a12816119d6565b9050919050565b7f6974206d75737420626520696e20456e64656420506572696f64000000000000600082015250565b6000611a4f601a83611047565b9150611a5a82611a19565b602082019050919050565b60006020820190508181036000830152611a7e81611a42565b9050919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302611ae77fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82611aaa565b611af18683611aaa565b95508019841693508086168417925050509392505050565b6000819050919050565b6000611b2e611b29611b2484610dc8565b611b09565b610dc8565b9050919050565b6000819050919050565b611b4883611b13565b611b5c611b5482611b35565b848454611ab7565b825550505050565b600090565b611b71611b64565b611b7c818484611b3f565b505050565b5b81811015611ba057611b95600082611b69565b600181019050611b82565b5050565b601f821115611be557611bb681611a85565b611bbf84611a9a565b81016020851015611bce578190505b611be2611bda85611a9a565b830182611b81565b50505b505050565b600082821c905092915050565b6000611c0860001984600802611bea565b1980831691505092915050565b6000611c218383611bf7565b9150826002028217905092915050565b611c3a82610e57565b67ffffffffffffffff811115611c5357611c526110d5565b5b611c5d82546117a4565b611c68828285611ba4565b600060209050601f831160018114611c9b5760008415611c89578287015190505b611c938582611c15565b865550611cfb565b601f198416611ca986611a85565b60005b82811015611cd157848901518255600182019150602085019450602081019050611cac565b86831015611cee5784890151611cea601f891682611bf7565b8355505b6001600288020188555050505b50505050505056fea2646970667358221220c2202053bcab5ed0817dbd4d6f0a9f4a5e5d070c21564cbe30210a5d26bc3d1f64736f6c63430008120033";

const router = require("express").Router();

router.get("/get-wallet-address", async (req, res) => {
  try {
    const accounts = await web3.eth.getAccounts();

    res.json({
      message: "Accounts",
      data: accounts,
      status: true,
    });
  } catch (error) {
    console.log(error);
    res.json({
      message: "Error",
      data: error,
      status: false,
    });
  }
});

router.get("/get-accounts", async (req, res) => {
  try {
    const accounts = await web3.eth.getAccounts();

    res.json({
      message: "Accounts",
      data: accounts.map((account) => {
        return { ...walletData[account], address: account };
      }),
      status: true,
    });
  } catch (error) {
    console.log(error);
    res.json({
      message: "Error",
      data: error,
      status: false,
    });
  }
});

router.post("/deploy-contract", async (req, res) => {
  // deploy the contract to the blockchain
  const contract = new web3.eth.Contract(abi);

  try {
    const data = await contract
      .deploy({
        data: bytecode,
        arguments: [req.body.candidates], // constructor arguments
      })
      .send({
        from: req.body.chairperson, // sender's address
        gas: 5000000, // gas limit for the transaction
      });

    res.json({
      message: "Contract Deployed",
      data: data,
      status: true,
    });
  } catch (error) {
    console.log(error);
    res.json({
      message: "Error",
      data: error,
      status: false,
    });
  }
});

router.get("/get-methods", async (req, res) => {
  console.log(req.query.contractAddress, "query");
  try {
    const constract = createContractInstance(req.query.contractAddress);

    const methods = await constract.methods;

    res.json({
      message: "Methods",
      data: methods,
      status: true,
    });
  } catch (error) {
    res.json({
      message: "Error",
      data: error,
      status: false,
    });
  }
});

router.get("/get-candidates", async (req, res) => {
  try {
    const contract = createContractInstance(req.query.contractAddress);

    const candidates = await contract.methods.getCandidates().call();

    res.json({
      message: "Candidates",
      data: candidates.map((candidate) => {
        return {
          ...walletData[candidate[0]],
          address: candidate[0],
        };
      }),
      status: true,
    });
  } catch (error) {
    console.log(error);
    res.json({
      message: "Error",
      data: error,
      status: false,
    });
  }
});

// get the list of candidates
router.get("/candidate/:id", async (req, res) => {
  try {
    const contract = createContractInstance(req.query.contractAddress);

    const candidate = await contract.methods.candidates(req.params.id).call();
    res.json({
      message: "Candidate",
      data: candidate,
      status: true,
    });
  } catch (error) {
    res.json({
      message: "Error",
      data: error,
      status: false,
    });
  }
});

// get the chairperson
router.get("/chairperson", async (req, res) => {
  try {
    const chairperson = await contract.methods.chairperson().call();
    res.json({
      message: "Chairperson",
      data: chairperson,
    });
  } catch (error) {
    res.json({
      message: "Error",
      data: error,
    });
  }
});

// get the last block number from the local node
router.get("/last-block", async (req, res) => {
  try {
    const lastBlock = await web3.eth.getBlockNumber();
    res.json({
      message: "Last Block",
      data: lastBlock,
    });
  } catch (error) {
    res.json({
      message: "Error",
      data: error,
    });
  }
});

// get the contents of the last block
router.get("/last-block-details", async (req, res) => {
  try {
    const lastBlock = await web3.eth.getBlockNumber();
    const lastBlockDetails = await web3.eth.getBlock(lastBlock);
    res.json({
      message: "Last Block Details",
      data: lastBlockDetails,
    });
  } catch (error) {
    res.json({
      message: "Error",
      data: error,
    });
  }
});

router.get("/get-state", async (req, res) => {
  try {
    const contract = createContractInstance(req.query.contractAddress);

    const state = await contract.methods.state().call();

    console.log("state");
    console.log(state);

    res.json({
      message: "State",
      data: state,
      status: true,
    });
  } catch (error) {
    res.json({
      message: "Error",
      data: error,
      status: false,
    });
  }
});

router.get("/start-voting", async (req, res) => {
  try {
    const contract = createContractInstance(req.query.contractAddress);
    const startVote = await contract.methods.startVote().send({
      from: req.query.chairperson,
      gas: 5000000,
    });
    res.json({
      message: "Start Vote",
      data: startVote,
      status: true,
    });
  } catch (error) {
    res.json({
      message: "Error",
      data: error,
      status: false,
    });
  }
});

// end vote
router.get("/end-voting", async (req, res) => {
  try {
    const contract = createContractInstance(req.query.contractAddress);
    const endVote = await contract.methods.endVote().send({
      from: req.query.chairperson,
      gas: 5000000,
    });

    console.log(endVote);

    res.json({
      message: "End Vote",
      data: endVote,
      status: true,
    });
  } catch (error) {
    res.json({
      message: "Error",
      data: error,
      status: false,
    });
  }
});

// wining-candidate
router.get("/wining-candidate", async (req, res) => {
  try {
    const contract = createContractInstance(req.query.contractAddress);
    const winingCandidate = await contract.methods.winningCandidate().call();
    res.json({
      message: "Wining Candidate",
      data: winingCandidate,
      status: true,
    });
  } catch (error) {
    res.json({
      message: "Error",
      data: error,
      status: false,
    });
  }
});

// get candidate vote
router.get("/get-candidate-details", async (req, res) => {
  try {
    const contract = createContractInstance(req.query.contractAddress);
    console.log(contract);
    const candidateVote = await contract.methods
      .candidates(req.query.candidateId)
      .call();
    res.json({
      message: "Candidate Vote",
      data: candidateVote,
      status: true,
    });

    console.log(candidateVote);
  } catch (error) {
    console.log(error);
    res.json({
      message: "Error",
      data: error,
      status: false,
    });
  }
});

// give rights to vote to a voter
router.post("/give-rights-to-voter", async (req, res) => {
  try {
    const contract = createContractInstance(req.body.contractAddress);

    // console.log()
    const token = jwt.sign({ 
        ...walletData[req.body.voter], 
        contractAdress: req.body.contractAddress 
      }, 'ascbchjabcjascbj');

    const giveRightToVote = await contract.methods
      .giveRightToVote(req.body.voter)
      .send({
        from: req.body.chairperson,
        gas: 5000000,
      });

    res.json({
      message: "Give Right To Vote",
      data: {
        ...giveRightToVote,
        url: `http://localhost:3000/give-vote-to-candidate?token=${token}`,
      },
      status: true,
    });
  } catch (error) {
    res.json({
      message: "Error",
      data: error.message,
      status: false,
    });
  }
});

router.get("/token-decode", async (req, res) => {
  try {
    const decoded = jwt.verify(req.body.token, 'ascbchjabcjascbj');
    // console.log(decoded.otp);
    res.json({
      message: "JWT token decoded",
      data: decoded,
      status: true,
    })
  } catch (error) {
    res.json({
      message: "Error",
      data: error.message,
      status: false,
    })
  }
});

router.post("/give-rights-to-voter-bulk", async (req, res) => {
  try {
    const contract = createContractInstance(req.body.contractAddress);
    const giveRightToVoterInBulk = await contract.methods
      .giveRightToVoterInBulk([req.body.voter])
      .send({
        from: req.body.chairperson,
        gas: 5000000,
      });
    res.json({
      message: "Give Right To Vote bulk",
      data: giveRightToVote,
      status: true,
    });
  } catch (error) {
    res.json({
      message: "Error",
      data: error,
      status: false,
    });
  }
});

router.get("/give-vote-to-candidate", async (req, res) => {
  try {
    const contract = createContractInstance(req.query.contractAddress);

    console.log(req.query);

    const giveVoteToCandidate = await contract.methods
      .vote(req.query.candidateId)
      .send({
        from: req.query.voterId,
        gas: 1500000,
      });
    res.json({
      message: "Give Vote To Candidate",
      data: giveVoteToCandidate,
      status: true,
    });
  } catch (error) {
    console.log(error);
    res.json({
      message: "Error",
      data: error,
      status: false,
    });
  }
});

module.exports = router;
