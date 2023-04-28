import React from "react";
import { Route, Routes } from "react-router-dom";
import Candidates from "../components/Candidates";
import GiveRightsToVoter from "../components/GiveRightsToVoter";
import Home from "../components/Home";
import Voting from "../components/Voting";
import GiveVoteToCandidate from "../components/GiveVoteToCandidate";
import EndVote from "../components/EndVote";
import WiningCandidate from "../components/WiningCandidate";
import Login from "../components/Login";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />

      {localStorage.getItem("loginCode") ? (
        <>
          <Route path="/voting" element={<Voting />} />
          <Route path="/get-candidates" element={<Candidates />} />
          <Route path="/give-rights-to-voter" element={<GiveRightsToVoter />} />
          <Route
            path="/give-vote-to-candidate"
            element={<GiveVoteToCandidate />}
          />
          <Route path="/end-vote" element={<EndVote />} />

          <Route path="/wining-candidate" element={<WiningCandidate />} />

          <Route path="*" element={<h1>404 Not Found</h1>} />
        </>
      ) : (
        <Route path="*" element={<h1>404 Not Found</h1>} />
      )}
    </Routes>
  );
};

export default AllRoutes;
