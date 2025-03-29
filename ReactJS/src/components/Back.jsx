import React from "react";
import { useNavigate } from "react-router-dom";

export const Back = () => {
  const navigate = useNavigate();

  return (
    <div className="back">
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};
