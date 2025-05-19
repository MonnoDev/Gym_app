import React from "react";

interface FormProps {
  label: string;
  type: string;
  value?: string;
  xmlns?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const Form: React.FC<FormProps> = ({ label, type, value, xmlns, onChange, required }) => {
  return (
    <div>
      <div>
        <label>{label}</label>
      </div>
      <input
        type={type}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default Form;
