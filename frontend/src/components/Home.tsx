import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const startVoting = () => {
    navigate("/login");
  };

  return (
    <div>
      <h1>E-Voting Blockchain System</h1>
      <p>
        Try to reduce the cost of voting and increase the security of the voting
        process.
      </p>
      <Button type="primary" onClick={() => startVoting()}>
        Click To start
      </Button>
    </div>
  );
};

export default Home;
