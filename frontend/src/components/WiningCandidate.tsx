import { Button, Col, Row, message } from "antd";
import React, { useEffect } from "react";
import { getRequests } from "../apis/api";

export default function WiningCandidate() {
  const winingCandidate = async () => {
    try {
      const response = await getRequests("block-chain/wining-candidate", {
        contractAddress: localStorage.getItem("contractAddress"),
      });
      if (response.status) {
        message.success("Wining candidate is " + response.data);
      } else {
        message.error("Wining candidate not found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    winingCandidate();
  }, []);

  return (
    <Row gutter={[16, 16]}>
      <Col>
        <h1>Wining Candidates</h1>
      </Col>
    </Row>
  );
}
