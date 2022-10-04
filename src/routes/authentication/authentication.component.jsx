import SignUpFrom from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import "./authentication.styles.scss";

const Authentication = () => {
  return (
    <div className="authenication-container">
      <SignInForm />
      <SignUpFrom />
    </div>
  );
};

export default Authentication;
