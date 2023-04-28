import { Button, Col, Row, Select, message } from "antd";
import { getRequests, postRequests } from "../apis/api";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Voting = () => {
  const navigate = useNavigate();
  const [accouts, setAccouts] = useState([]);
  const [chairman, setChairman] = useState<any>("");
  const [selectCandidate, setSelectCandidate] = useState(true);
  const [selectedCandidate, setSelectedCandidate] = useState([]);

  const deployContract = async () => {
    const response = await postRequests("block-chain/deploy-contract", {
      candidates: selectedCandidate,
      chairperson: chairman,
    });
    if (response.status) {
      localStorage.setItem("contractAddress", response.data.options.address);
      navigate("/get-candidates");
    }
  };

  const getAPI = async () => {
    try {
      const response = await getRequests("block-chain/get-accounts");
      if (response.status) {
        setAccouts(response.data);
      } else {
        message.error("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAPI();
  }, []);

  useEffect(() => { 
    localStorage.getItem("chairperson") &&
      setChairman(localStorage.getItem("chairperson"));
  }, []);

  return (
    <Row justify={"center"} gutter={[24, 24]}>
      {selectCandidate ? (
        <>
          <Col span={24}>
            <h2 style={{ marginBottom: 0 }}>Select a candidates</h2>
          </Col>
          <Col span={24}>
            <Select
              placeholder="Select Candidates"
              style={{ width: "100%" }}
              key={"candidates"}
              mode="multiple"
              onChange={(value) => {
                console.log(value, chairman);
                setSelectedCandidate(value);
              }}
            >
              {accouts
                .filter((ele: any) => ele.address !== chairman)
                .map((account: any) => (
                  <Select.Option key={account.address} value={account.address}>
                    {account.name}
                  </Select.Option>
                ))}
            </Select>
          </Col>
          <Col span={24}>
            <Button type="primary" onClick={() => deployContract()}>
              Click To Deploy
            </Button>
          </Col>
        </>
      ) : (
        <>
          <Col span={24}>
            <h2 style={{ marginBottom: 0 }}>Select a chairmain</h2>
          </Col>
          <Col span={24}>
            <Select
              placeholder="Select Chairperson"
              style={{ width: "100%", maxWidth: "400px" }}
              key="chairman"
              onChange={(value) => {
                console.log(value);
                localStorage.setItem("chairperson", value);
                setChairman(value);
              }}
            >
              {accouts.map((account: any) => (
                <Select.Option
                  key={account.address}
                  value={account.address}
                  //   onClick={() => deployContract(account)}
                >
                  {account.name}
                </Select.Option>
              ))}
            </Select>
          </Col>
          <Col span={24}>
            <Button type="primary" onClick={() => setSelectCandidate(true)}>
              Click To start
            </Button>
          </Col>
        </>
      )}
    </Row>
  );
};

export default Voting;
