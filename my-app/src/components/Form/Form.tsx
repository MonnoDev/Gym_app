import React from "react";
import './Form.css';

interface FormProps {
  label: string;
  placeholder: string;
  className: string;
  type: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const Form: React.FC<FormProps> = ({ label, type, value, placeholder, className, onChange, required }) => {
  return (
    <div>
      <div className="flex-column">
        <label>{label}</label>
      </div>
      <div className="inputForm">
        <input
          placeholder={placeholder}
          className={className}
          type={type}
          value={value}
          onChange={onChange}
          required={required}
      />
      </div>
    </div>
  );
};

export default Form;
