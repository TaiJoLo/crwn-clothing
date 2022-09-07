import { useState } from "react";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpFrom = () => {
  const [fromField, setFromField] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = fromField;

  const handleChnage = (event) => {};

  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={() => {}}>
        <label>Display Name</label>
        <input type="text" required onChange={handleChnage} />

        <label>Email</label>
        <input type="email" required onChange={handleChnage} />

        <label>Password</label>
        <input type="password" required onChange={handleChnage} />

        <label>Confirmed Password</label>
        <input type="password" required onChange={handleChnage} />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpFrom;
