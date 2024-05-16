import loginImg from "../assets/Images/loginimg.jpg"
import Template from "../components/Template"


function Login() {
    return (
      <Template
        title="Welcome Back"
        description1="Ready to satisfy your cravings?"
        description2="Login to explore your favorite dishes and discover new delights!"
        image={loginImg}
        formType="login"
      />
    )
  }
  
  export default Login
  
