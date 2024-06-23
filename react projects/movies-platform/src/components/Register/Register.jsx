import { useEffect, useState } from "react";
import { register } from "../../libs/auth";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/form-hook";

export default function Register() {
//   const [email, setEmail] = useState("");
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const emailProps = useForm('email', 'email'); 
  const usernameProps = useForm('username', 'text');
  const passwordProps = useForm('password', 'password');
  const confirmPasswordProps = useForm('confirmPassword', 'password');

  const navigate = useNavigate();

  useEffect(() => {
    const min8CharsSpecialCharacterOneLetterOneNumber =
      "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$";

    if (!passwordProps.value?.match(min8CharsSpecialCharacterOneLetterOneNumber)) {
      setPasswordError(
        `The password must contain at least 8 characters, one special character, one letter and one number`
      );
      return;
    }

    if (passwordProps.value !== confirmPasswordProps.value) {
      setPasswordError(`Your passwords don't match`);

      return;
    }

    setPasswordError(null);
  }, [passwordProps.value, confirmPasswordProps.value]);

  function registerUser(event) {
    event.preventDefault();

    
    if (passwordError) {
      return;
    }

    const user = {
      email: emailProps.value,
      username: usernameProps.value,
      password: passwordProps.value,
    };

    register(user).then(() => navigate("/login"));
  }

  return (
    <form onSubmit={registerUser} className="registerForm">
      <fieldset className="form-fieldset">
        <label htmlFor="email" className="form-label">Email: </label>
        <input
          {...emailProps}
          required
          className="form-input"
        />
      </fieldset>

      <fieldset  className="form-fieldset">
        <label htmlFor="username" className="form-label">Username: </label>
        <input
          {...usernameProps}
          required
          className="form-input"
        />
      </fieldset>

      <fieldset className="form-fieldset">
        <label htmlFor="password" className="form-label">Password: </label>
        <input
          {...passwordProps}
          required
          className="form-input"
        />
      </fieldset>

      <fieldset className="form-fieldset">
        <label htmlFor="confirmPassword" className="form-label">Confirm password: </label>
        <input
          {...confirmPasswordProps} 
          required
          className="form-input"
        />
      </fieldset>

      <p className=" text-red-400">{passwordError}</p>

      <button className="form-button">Register</button>
    </form>
  );
}