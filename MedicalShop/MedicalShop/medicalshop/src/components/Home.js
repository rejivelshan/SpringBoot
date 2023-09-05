import React from "react";
import NavBar from "./Navbar";

const containerStyle = {
  background: `url('https://c1.wallpaperflare.com/preview/839/207/808/pill-tablet-pharmacy-medicine.jpg')`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  minHeight: "100vh",
};

const headingStyle = {
  fontSize: "2.5rem",
  fontWeight: "600",
  marginBottom: "1rem",
  background: "linear-gradient(90deg, #f06, #09f, #f06)",
  backgroundClip: "text",
  color: "transparent",
  animation: "glowing 2s infinite",
};

const imageStyle = {
  width: "100%",
  maxWidth: "32rem",
  margin: "0 auto",
  borderRadius: "0.5rem",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  marginBottom: "1.5rem",
};

const graySectionStyle = {
  background: "#f7f7f7",
  padding: "2rem 0",
  color: "#333",
};

const linkStyle = {
  color: "#333",
  textDecoration: "underline",
  margin: "0 1rem",
};

const glowingText = {
  animation: "glowing 2s infinite",
  background: "linear-gradient(90deg, #f06, #09f, #f06)",
  backgroundClip: "text",
  color: "transparent",
};

function Home() {
  return (
    <div style={containerStyle}>
      <NavBar />
      <div className="container mx-auto p-6">
        <h1 style={headingStyle}>Welcome to OnlineMedicalShop</h1>
        <img
          src="https://c4.wallpaperflare.com/wallpaper/182/642/406/pills-pharmacy-wallpaper-preview.jpg"
          alt="OnlineMedicalShop"
          style={imageStyle}
        />
        <div>
          <p>
            Key Features of Online Medical Shops:
          </p>
          <ul>
            <li style={glowingText}>Wide Range of Products: Online medical shops offer a diverse range of products, including prescription medications, over-the-counter drugs, vitamins, supplements, medical devices, personal care products, and health-related accessories.</li>
            <li style={glowingText}>User-Friendly Website: These platforms provide a seamless and hassle-free shopping experience with easy navigation, search functionality, and a secure checkout process.</li>
            <li style={glowingText}>24/7 Accessibility: Customers can place orders and access healthcare information at any time, making it convenient for those with busy schedules or health concerns outside regular business hours.</li>
            <li style={glowingText}>Prescription Services: Many online medical shops have licensed pharmacists who can review and fulfill prescription orders.</li>
            <li style={glowingText}>Privacy and Security: Online medical shops prioritize patient privacy and data security.</li>
            <li style={glowingText}>Convenient Home Delivery: Orders can be delivered directly to the customer's doorstep, saving time and effort, especially for individuals with mobility issues.</li>
            <li style={glowingText}>Health Information Resources: Online medical shops often provide valuable health information and resources, empowering customers to make informed choices about their healthcare needs.</li>
            <li style={glowingText}>Regular Discounts and Offers: Customers can benefit from discounts, special offers, and loyalty programs, helping them save on healthcare expenses.</li>
            <li style={glowingText}>Customer Reviews and Ratings: Shoppers can read reviews and ratings from other customers, helping them make informed decisions about product quality and reliability.</li>
            <li style={glowingText}>Accessible Customer Support: Online medical shops typically offer customer support through various channels, such as chat, email, or phone, to assist with inquiries and concerns.</li>
          </ul>
        </div>
      </div>
      <div style={graySectionStyle}>
        <div className="container mx-auto p-6">
          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem" }}>Quick Links</h2>
          <div style={linkStyle}>
            <a href="#terms">Terms and Conditions</a>
          </div>
          <div style={linkStyle}>
            <a href="#about">About</a>
          </div>
          <div style={linkStyle}>
            <a href="#contact">Contact Us</a>
          </div>
          <div style={linkStyle}>
            <a href="#faq">FAQ</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
