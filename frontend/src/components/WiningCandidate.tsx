import { Button, Col, List, Modal, Row, Tag, Typography, message } from "antd";
import React, { useEffect, useState } from "react";
import { getRequests } from "../apis/api";

export default function WiningCandidate() {
  const [candidates, setCandidates] = useState([]);
  const [candidateDetails, setCandidateDetails] = useState<any>({});

  const getCandidateDetails = async (index: number) => {
    try {
      const response = await getRequests("block-chain/get-candidate-details", {
        contractAddress: localStorage.getItem("contractAddress"),
        candidateId: index,
      });
      if (response.status) {
        setCandidateDetails(response);
        showModal();
      } else {
        message.error("Candidate details not fetched");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [data, setData] = useState<any>({});

  const winingCandidate = async () => {
    try {
      const response = await getRequests("block-chain/wining-candidate", {
        contractAddress: localStorage.getItem("contractAddress"),
      });

      if (response.status) {
        setData(response.data);
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

  const getCandidates = async () => {
    try {
      const response = await getRequests("block-chain/get-candidates", {
        contractAddress: localStorage.getItem("contractAddress"),
      });
      if (response.status) {
        setCandidates(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCandidates();
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Row gutter={[16, 16]}>
        <Col>
          <h1>Wining Candidates</h1>
          <Tag color="green">{JSON.stringify(data.name)}</Tag>
          <h2>Candidate Voting Details</h2>
          <List
            bordered
            dataSource={candidates}
            renderItem={(item, i) => (
              <List.Item>
                <Typography.Text mark>[Candidate {i + 1}]</Typography.Text>{" "}
                {item[0]}{" "}
                <Button
                  type="primary"
                  size="small"
                  onClick={() => getCandidateDetails(i)}
                >
                  Detalis
                </Button>
              </List.Item>
            )}
          />
          <Modal
            title={candidateDetails?.data?.name}
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            centered
          >
            <p>Vote Count: {candidateDetails?.data?.voteCount}</p>
          </Modal>
        </Col>
      </Row>
    </>
  );
}
