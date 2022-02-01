import './login.css';

export const Login = () => {
  return (
    <div className="container login-wrapper">
      <div className="login-wrapper-inner">
        <h1>LOGIN</h1>
        <hr/>

        <button 
          className="btn btn-outline-dark btn-login"
          // onClick={ handleLogin }
        >
          Login
        </button>
      </div>
    </div>
  )
};
