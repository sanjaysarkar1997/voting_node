import { Button, Col, Row, message } from "antd";
import React from "react";
import { getRequests } from "../apis/api";

export default function EndVote() {
  const endVote = async () => {
    try {
      const response = await getRequests("block-chain/end-voting", {
        contractAddress: localStorage.getItem("contractAddress"),
        chairperson: localStorage.getItem("chairperson"),
      });
      if (response.status) {
        message.success("Voting ended successfully");
      } else {
        message.error("Voting not ended");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Row gutter={[16, 16]}>
      <Col>
        <Button type="primary" onClick={() => endVote()}>
          End Vote
        </Button>
        
      </Col>
    </Row>
  );
}
