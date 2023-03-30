import { message, Row, Col, List, Typography, Button } from "antd";
import { getRequests, postRequests } from "../apis/api";
import { useState, useEffect } from "react";

const GiveRightsToVoter = () => {
  const [voterAddress, setVoterAddress] = useState([]);

  const giveRightsToVoter = async () => {
    const response = await postRequests("block-chain/give-rights-to-voter", {
      contractAddress: localStorage.getItem("contractAddress"),
      voterAddress,
    });
    if (response.status) {
      message.success("Voter rights given successfully");
    }
  };

  const giveRightsToVoterToAll = async () => {
    const response = await postRequests("block-chain/give-rights-to-voter", {
      contractAddress: localStorage.getItem("contractAddress"),
      voterAddress,
    });
    if (response.status) {
      message.success("Voter rights given successfully");
    }
  };

  const getAccounts = async () => {
    const response = await getRequests("block-chain/get-accounts");
    if (response.status) {
      setVoterAddress(response.data);
    }
  };

  const startVoting = async () => {
    const response = await getRequests("block-chain/start-voting", {
      contractAddress: localStorage.getItem("contractAddress"),
    });
    if (response.status) {
      message.success("Voting started successfully");
    } else {
      message.error("Voting not started");
    }
  };

  useEffect(() => {
    getAccounts();
  }, []);

  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <h2 style={{ marginBottom: 0 }}>Give Rights To Voter</h2>
      </Col>
      <Col span={24}>
        <List
          header={
            <div>
              <Button
                type="primary"
                onClick={giveRightsToVoterToAll}
                size="small"
              >
                Give Rights To All
              </Button>
            </div>
          }
          bordered
          dataSource={voterAddress}
          renderItem={(item, i) => (
            <List.Item>
              <Typography.Text mark>[Candidate {i + 1}]</Typography.Text> {item}{" "}
              <Button type="primary" onClick={giveRightsToVoter} size="small">
                Give Rights
              </Button>
            </List.Item>
          )}
        />
      </Col>
      <Col span={24}>
        <Button type="primary" onClick={() => startVoting()}>
          Start Voting
        </Button>
      </Col>
    </Row>
  );
};

export default GiveRightsToVoter;
