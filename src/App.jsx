import { useState } from 'react';
//import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  //I CAN USE USEREF IF I WANT TO PREVENT MY COMPONENT FROM RE-RENDERING
  // const useRefTest = useRef();
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.target);
  //   console.log(Object.fromEntries(data.entries()));
  // }

  const [values, setValues] = useState({
    name: "",
    birthday: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [focusedAndLeft, setFocusedAndLeft] = useState({});

  const handleBlur = (event, fieldName) => {
    setFocusedAndLeft((prevState) => ({
      ...prevState,
      [fieldName]: true
    }));
  };

  const handleChange = (event) => {
    setValues( {...values, [event.target.name]: event.target.value});
  }

  const handleSubmit = (event) => {
    event.preventDefault(); // Para evitar o comportamento padrão do formulário

    //Lógica de tratamento de envio aqui

  }

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <div className="formInput">
          <label>Username</label>
          <input
            pattern='^[A-Za-z0-9]{3,16}$'
            required={true}
            name='username'
            type='text'
            placeholder='Username'
            value={values[name]}
            focused={focusedAndLeft.username ? 'true' : 'false'}
            onBlur={(event) => handleBlur(event, 'username')}
            onChange={handleChange}
          />
          <span>Username should be 3-16 characters and shouldn't include any special character</span>
        </div>
        
        <div className="formInput">
          <label>Birthday</label>
          <input
            required={true}
            name='birthday'
            type='date'
            placeholder='Birthday'
            value={values[name]}
            onChange={handleChange}
          />
          <span>Username should be 3-16 characters and shouldn't include any special character</span>
        </div>

        <div className="formInput">
          <label>Email</label>
          <input
            required={true}
            name='email'
            type='email'
            placeholder='Email'
            value={values[name]}
            focused={focusedAndLeft.email ? 'true' : 'false'}
            onBlur={(event) => handleBlur(event, 'email')}
            onChange={handleChange}
          />
          <span>It should be a valid email address!</span>
        </div>

        <div className="formInput">
          <label>Password</label>
          <input
            pattern='^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$'
            required={true}
            name='password'
            type='password'
            placeholder='Password'
            value={values[name]}
            focused={focusedAndLeft.password ? 'true' : 'false'}
            onBlur={(event) => handleBlur(event, 'password')}
            onChange={handleChange}
          />
          <span>Password should be 8-20 characters and should at least include 1 letter, 1 number, and 1 special character!</span>
        </div>

        <div className="formInput">
          <label>Confirm Password</label>
          <input
            pattern={values.password}
            required={true}
            name='confirmPassword'
            type='password'
            placeholder='Confirm Password'
            value={values[name]}
            focused={focusedAndLeft.confirmPassword ? 'true' : 'false'}
            onBlur={(event) => handleBlur(event, 'confirmPassword')}
            onFocus={() => setFocusedAndLeft(true)}
            onChange={handleChange}
          />
          <span>Passwords don't match!</span>
        </div>


        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App
