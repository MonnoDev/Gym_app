import React, { useState } from "react";
import Form from "../../components/Form/Form";

const ForgotPwd: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    

    return (
        <div>
      <form className="form">
        <Form
            label='Email'
            placeholder="Enter your Email"
            className="input"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
        />
        </form>
        </div>
    );
};

export default ForgotPwd;