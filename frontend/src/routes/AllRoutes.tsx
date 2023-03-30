import React from "react";
import { Route, Routes } from "react-router-dom";
import Candidates from "../components/Candidates";
import GiveRightsToVoter from "../components/GiveRightsToVoter";
import Home from "../components/Home";
import Voting from "../components/Voting";
import GiveVoteToCandidate from "../components/GiveVoteToCandidate";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/voting" element={<Voting />} />
      <Route path="/get-candidates" element={<Candidates />} />
      <Route path="/give-rights-to-voter" element={<GiveRightsToVoter />} />
      <Route
        path="/give-vote-to-candidate/:id"
        element={<GiveVoteToCandidate />}
      />
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
};

export default AllRoutes;
