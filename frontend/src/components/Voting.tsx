import { Button, Col, Row, Select } from "antd";
import { getRequests, postRequests } from "../apis/api";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Voting = () => {
  const navigate = useNavigate();
  const [accouts, setAccouts] = useState([]);
  const [chairman, setChairman] = useState("");
  const [selectCandidate, setSelectCandidate] = useState(false);
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
      if (response.status) setAccouts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAPI();

    return () => {
      setAccouts([]);
    };
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
                console.log(value);
                setSelectedCandidate(value);
              }}
            >
              {accouts
                .filter((ele) => ele !== chairman)
                .map((account: any) => (
                  <Select.Option key={account} value={account}>
                    {account}
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
                setChairman(value);
              }}
            >
              {accouts.map((account: any) => (
                <Select.Option
                  key={account}
                  value={account}
                  //   onClick={() => deployContract(account)}
                >
                  {account}
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