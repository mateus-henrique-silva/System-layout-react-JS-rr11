import Input from "../../Components/Input/Input";
import "./Styles.css";
export default function Login() {
  return (
    <div className="login">
      <div className="img-system"></div>
      <div className="login-form">
        <h1>Login</h1>

        <form action="">
          <Input />
          <br />
          <strong>
            Não tem cadastro? <a href="#">clique aqui</a>
          </strong>
        </form>
      </div>
    </div>
  );
}
