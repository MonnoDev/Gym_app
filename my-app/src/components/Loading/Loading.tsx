import React from "react";

interface LoadingProps {
    message: string;
  }
  
  const Loading: React.FC<LoadingProps> = ({ message }) => {
    return (
      <div className="loading-container">
        <div className="loading-message">{message}</div>
      </div>
    );
  };
  
export default Loading;
