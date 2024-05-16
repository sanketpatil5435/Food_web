import signupImg from "../assets/Images/signupimg.avif"
import Template from "../components/Template"


function Signup() {
    return (
      <Template
        title="Join Our Foodie Community"
        description1="Sign up today and start your culinary adventure!"
        description2="Discover a world of flavors and enjoy exclusive member benefits."
        image={signupImg}
        formType="signup"
      />
    )
  }
  
  export default Signup