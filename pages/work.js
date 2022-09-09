import React from "react";
import Layout from "../components/Layout";
import Portfolio from "../components/Portfolio";

const WorkScreen = () => {
  return (
    <div>
      <Layout
        heading="My Work"
        message="This is my recent work travelling the world"
      />
      <Portfolio/>
    </div>
  );
};
export default WorkScreen;
