import React from "react";
import Contact from "../components/Contact";
import Layout from "../components/Layout";

const ContactScreen = () => {
  return (
    <div>
      <Layout
        heading="Contact"
        message="Submit the form below for more work and quotes."
      />
      <Contact />
    </div>
  );
};
export default ContactScreen;
