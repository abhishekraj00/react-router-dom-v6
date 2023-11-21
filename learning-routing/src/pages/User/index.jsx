import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const param = useParams();
  return (
    <div className="page">
      User : {param.userName} <span> ID: {param.userId}</span>
    </div>
  );
};

export default User;
