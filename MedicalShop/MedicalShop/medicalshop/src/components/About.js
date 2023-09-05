import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./Navbar";

const containerStyle = {
  background: `url('https://ternahospital.org/wp-content/uploads/2019/02/pharmacy.jpg')`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  minHeight: "100vh",
};

const headingStyle = {
  fontSize: "2.5rem",
  fontWeight: "600",
  color: "#fff", // White text color
  marginBottom: "1rem",
};

const contentStyle = {
  background: "rgba(255, 255, 255, 0.9)", // Semi-transparent white background
  padding: "2rem",
  borderRadius: "0.5rem",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
};

const listItemStyle = {
  marginBottom: "0.5rem",
};

function About() {
  return (
    <div style={containerStyle}>
      <NavBar />
      <div className="container mx-auto p-8">
        <h1 style={headingStyle}>About Online Medical Shops</h1>
        <div style={contentStyle}>
          <p className="text-lg mb-4">
            An online medical shop, also known as an online pharmacy or e-pharmacy, is a digital platform that allows customers to purchase prescription and over-the-counter medications, healthcare products, and medical supplies via the internet. These platforms have become increasingly popular due to their convenience, accessibility, and the ability to deliver healthcare-related products directly to customers' doorsteps.
          </p>

          <div style={listItemStyle}>
            <h2 className="text-xl font-semibold mb-2">Key Features of Online Medical Shops</h2>
            <ul className="list-disc pl-6">
              <li>User-Friendly Website: An online medical shop typically operates through a user-friendly website that offers easy navigation, search functionality, and a secure checkout process. The website is designed to provide a seamless and hassle-free shopping experience for customers.</li>
              <li>Wide Range of Products: Online medical shops offer a diverse range of products, including prescription medications, over-the-counter drugs, vitamins, supplements, medical devices, personal care products, and health-related accessories. Customers can browse and select products based on their healthcare needs.</li>
              {/* Add more list items here */}
            </ul>
          </div>

          <p className="text-lg">
            Overall, an online medical shop provides a convenient and accessible solution for individuals to access healthcare products and medications while prioritizing safety, security, and customer satisfaction. These platforms play a crucial role in modern healthcare, especially for those who require regular medication or have limited access to physical pharmacies.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
