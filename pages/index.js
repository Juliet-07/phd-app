import React from "react";
import Instagram from "../components/instagram";
import Layout from "../components/Layout";
import Slider from "../components/Slider";
import { SliderData } from "../components/SliderData";

const Home = () => {
  return (
    <>
      <Layout
        title="Test Website"
        heading="Captur Photography"
        message="I capture moments in nature and keep them alive"
      />
      <Slider slides={SliderData} />
      <Instagram />
    </>
  );
};
export default Home;
