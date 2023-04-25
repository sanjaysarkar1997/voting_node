import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { getRequests } from "../apis/api";
import { List, Typography, Button, message, Tag } from "antd";

const GiveVoteToCandidate = () => {
  // extract token query param from url

  const token = new URLSearchParams(window.location.search).get("token");


  console.log(token);
  const [candidates, setCandidates] = useState([]);
  const [state, setState] = useState("");

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

  //   get voting state
  const getVotingState = async () => {
    try {
      const response = await getRequests("block-chain/get-state", {
        contractAddress: localStorage.getItem("contractAddress"),
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
    getCandidates();
    getVotingState();
  }, []);

  return (
    <div>
      {state === "0" && <Tag color={"red"}>Voting not started</Tag>}
      {state === "1" && (
        <List
          header={<Tag color={"blue"}>Voter Id</Tag>}
          bordered
          dataSource={candidates}
          renderItem={(item, i) => (
            <List.Item>
              <Typography.Text mark>[Candidate {i + 1}]</Typography.Text>{" "}
              {item[0]}{" "}
              <Button
                type="primary"
                // onClick={() => giveVoteToCandidate(i)}
                size="small"
              >
                Vote
              </Button>
            </List.Item>
          )}
        />
      )}

      {state === "2" && <Tag color={"green"}>Voting completed</Tag>}
    </div>
  );
};

export default GiveVoteToCandidate;
