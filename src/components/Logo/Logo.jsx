import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./codeleap-logo.svg";
import "./Logo.css";

const Logo = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => navigate("/signup"), 1250);
  }, [navigate]);

  return (
    <div className="logo-container">
      <div className="logo">
        <img src={logo} alt="Codeleap logo" />
      </div>
    </div>
  );
};

export default Logo;
