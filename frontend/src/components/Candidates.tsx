import React from "react";
import { Row, Col, Table, List, Typography, Button } from "antd";
import { useEffect, useState } from "react";
import { getRequests } from "../apis/api";
import { useNavigate } from "react-router-dom";

const Candidates = () => {
  const navigate = useNavigate();
  const [candidates, setCandidates] = useState([]);

  const getCandidates = async () => {
    const response = await getRequests("block-chain/get-candidates", {
      contractAddress: localStorage.getItem("contractAddress"),
    });
    if (response.status) {
      setCandidates(response.data);
    }
  };

  useEffect(() => {
    getCandidates();
  }, []);

  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <h2 style={{ marginBottom: 0 }}>Candidates </h2>
      </Col>
      <Col span={24}>
        <List
          // header={<div>Header</div>}
          // footer={<div>Footer</div>}
          bordered
          dataSource={candidates}
          renderItem={(item: any, i) => (
            <List.Item>
              <Typography.Text mark>[Candidate {i + 1}]</Typography.Text>{" "}
              {item.name}
            </List.Item>
          )}
        />
      </Col>
      <Col span={24}>
        <Button
          type="primary"
          onClick={() => navigate("/give-rights-to-voter")}
        >
          Give Rights To Voter
        </Button>
      </Col>
    </Row>
  );
};

export default Candidates;
