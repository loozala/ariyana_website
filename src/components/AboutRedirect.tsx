// src/components/AboutRedirect.tsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AboutRedirect: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/#about");
  }, [navigate]);
  return null;
};

export default AboutRedirect;
