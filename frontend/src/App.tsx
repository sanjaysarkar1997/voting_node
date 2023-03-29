import { useEffect, useState } from "react";
import "./App.css";

import { getRequests, postRequests } from "./apis/api";
import { Button, ConfigProvider, List, Typography } from "antd";

function App() {
  const [accouts, setAccouts] = useState([]);
  const [candidates, setCandidates] = useState([]);

  const getAPI = async () => {
    const response = await getRequests("block-chain/get-accounts");
    setAccouts(response.data);
  };

  const deployContract = async (chairperson: string) => {
    const response = await postRequests("block-chain/deploy-contract", {
      candidates: ["Rama", "Nick", "Jose"],
      chairperson,
    });
    if (response.status) {
      localStorage.setItem("contractAddress", response.data.options.address);
    }
  };

  const getMethods = async () => {
    const response = await getRequests("block-chain/get-methods", {
      contractAddress: localStorage.getItem("contractAddress"),
    });
    console.log(response, "Log");
  };

  const getCandidates = async () => {
    const response = await getRequests("block-chain/get-candidates", {
      contractAddress: localStorage.getItem("contractAddress"),
    });
    if (response.status) {
      setCandidates(response.data);
    }
  };

  useEffect(() => {
    getAPI();
    getCandidates();
  }, []);

  return (
    <ConfigProvider
      direction="rtl"
      theme={{
        token: {
          colorBgBase: "green ",
          colorPrimary: "red",
        },
      }}
    >
      <List
        header={<div>All Block Chain Account</div>}
        footer={<div>Account Details</div>}
        bordered
        dataSource={accouts}
        renderItem={(item, i) => (
          <List.Item>
            <Typography.Text mark>[ACCOUNTS {i}]</Typography.Text> {item}{" "}
            {!i && !localStorage.getItem("contractAddress") && (
              <Button
                type="primary"
                size="small"
                onClick={() => deployContract(item)}
              >
                Depoy Contract
              </Button>
            )}
          </List.Item>
        )}
      />

      <List
        header={<div>All Candidates</div>}
        bordered
        dataSource={candidates}
        renderItem={(item, i) => (
          <List.Item>
            <Typography.Text mark>[Candidates {i}]</Typography.Text> {item[0]}{" "}
            <Button type="primary" size="small">
              Vote
            </Button>
          </List.Item>
        )}
      />
    </ConfigProvider>
  );
}

export default App;
