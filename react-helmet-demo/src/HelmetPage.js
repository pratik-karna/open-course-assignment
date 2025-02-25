import React from "react";
import { Helmet } from "react-helmet";

const HelmetPage = () => {
  return (
    <div className="container">
      <Helmet>
        <title>React Helmet Example</title>
        <meta name="description" content="A sample page demonstrating React Helmet for dynamic meta tags." />
        <meta name="keywords" content="React, Helmet, SEO, Meta Tags" />
        <meta name="author" content="Your Name" />
      </Helmet>

      <h1>React Helmet Demo</h1>
      <p>This page dynamically updates the document title and meta tags using React Helmet.</p>
    </div>
  );
};

export default HelmetPage;
