import React from 'react';
import { Helmet } from 'react-helmet';

const MyPage = () => {
  const title = "My Awesome Page Title";
  const description = "This is a description of my page, optimized for search engines.";
  const keywords = "react, helmet, seo, example, page";
  const author = "Your Name";
  const imageUrl = "https://www.example.com/images/my-image.jpg"; // Replace with your image URL

  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />

       
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={window.location.href} /> 
        <meta property="og:type" content="website" /> 

       
        <meta name="twitter:card" content="summary_large_image" /> 
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />

       
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" /> 

        
      </Helmet>

     
      <h1>Welcome to My Page</h1>
      <p>This is the main content of my page.</p>
 
    </div>
  );
};

export default MyPage;