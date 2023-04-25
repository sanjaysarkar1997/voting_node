import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { getRequests } from "../apis/api";
import { List, Typography, Button, message, Tag, Input } from "antd";

const GiveVoteToCandidate = () => {
  // extract token query param from url

  const [isVerified, setIsVerified] = useState(false);
  const [candidates, setCandidates] = useState([]);
  const [state, setState] = useState("");
  const [voterDetails, setVoterDetails] = useState<any>({});
  const [otp, setOtp] = useState("");

  const token = new URLSearchParams(window.location.search).get("token");

  const verifyVoter = async () => {
    try {
      const response = await getRequests("block-chain/verify-voter", {
        contractAddress: localStorage.getItem("contractAddress"),
        token,
      });
      if (response.status) {
        console.log(response.data);
        setVoterDetails(response.data);
      } else {
        message.error("Voter not verified");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const matchOTP = (otp: string) => {
    if (+otp === voterDetails.otp) {
      setIsVerified(true);
    } else {
      message.error("OTP not matched");
    }
  };

  const giveVoteToCandidate = async (candidateId: number) => {
    try {
      const response = await getRequests("block-chain/give-vote-to-candidate", {
        contractAddress: voterDetails.contractAdress,
        candidateId,
        voterId: voterDetails.voterId,
      });
      if (response.status) {
        message.success("Vote given successfully");
      } else {
        message.error("Vote not given");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getCandidates = async () => {
    try {
      const response = await getRequests("block-chain/get-candidates", {
        contractAddress: voterDetails.contractAdress,
      });
      if (response.status) {
        setCandidates(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //   get voting state
  const getVotingState = async () => {
    try {
      const response = await getRequests("block-chain/get-state", {
        contractAddress: voterDetails.contractAdress,
      });
      console.log(response);
      if (response.status) {
        setState(response.data);
      } else {
        message.error("Voting state not fetched");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (token) {
      verifyVoter();
    }
  }, []);

  useEffect(() => {
    if (voterDetails.contractAdress) {
      getCandidates();
      getVotingState();
    }
  }, [voterDetails]);

  return (
    <div>
      {state === "0" && <Tag color={"red"}>Voting not started</Tag>}
      {state === "1" &&
        (isVerified ? (
          <List
            header={<Tag color={"blue"}>Voter Id</Tag>}
            bordered
            dataSource={candidates}
            renderItem={(item: any, i) => (
              <List.Item>
                <Typography.Text mark>[Candidate {i + 1}]</Typography.Text>{" "}
                {item.name}{" "}
                <Button
                  type="primary"
                  onClick={() => giveVoteToCandidate(i)}
                  size="small"
                >
                  Vote
                </Button>
              </List.Item>
            )}
          />
        ) : (
          <div>
            <Tag color={"blue"}>Voter not verified</Tag>
            <Typography.Title level={4}>
              Please verify your OTP to vote
            </Typography.Title>
            <Input
              placeholder="Enter OTP"
              style={{ marginBottom: "10px" }}
              onChange={(e) => setOtp(e.target.value)}
              type="number"
            />

            <Button
              type="primary"
              onClick={() => matchOTP(otp)}
              disabled={otp.length !== 4}
            >
              Verify
            </Button>
          </div>
        ))}

      {state === "2" && <Tag color={"green"}>Voting completed</Tag>}
    </div>
  );
};

export default GiveVoteToCandidate;
