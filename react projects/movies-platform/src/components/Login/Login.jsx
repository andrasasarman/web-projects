import { login } from "../../libs/auth";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from '../../contexts/AuthContext';
import '../../assets/style/atoms.css';



export default function Login() {
    const navigator = useNavigate();
    const [error, setError] = useState();

    const {setAuth} = useContext(AuthContext);

    function loginUser(event) {
        event.preventDefault();
        const formElement = event.target;
    
        const { emailElement, passwordElement } = formElement;
        const credentials = {
          email: emailElement.value,
          password: passwordElement.value,
        }

        login(credentials)
        .then((response) => {
          const { accessToken } = response.data;
  
          localStorage.setItem('accessToken', accessToken);
          setAuth(accessToken);
          navigator('/');
        })
        .catch(({ response }) => {
          if (response.status === 400) {
            setError('Email or password are incorrect');
          }
  
          if (String(response.status).includes(5)) {
            setError('Service unavailable, please try again later');
          }
        });
    
    }

    return (
        <form onSubmit={loginUser}>
            <fieldset className="form-fieldset">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" id="email" name="emailElement" required className="form-input"/>
            </fieldset>
            <fieldset className="form-fieldset">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" id="password" name="passwordElement" required className="form-input" />
            </fieldset>
            <button className="form-button">Login</button>
            <p>{error}</p>
        </form>
    );
}