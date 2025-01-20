import { Button, Label, TextInput } from "flowbite-react";
import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom"; 
import { div } from "framer-motion/client";
import { Helmet } from "react-helmet-async";
const Login = () => {
    const {signInUser, signInWithGoogle} = useContext(AuthContext)
    const navigate = useNavigate();
    const handleLogin=(event)=>{
        event.preventDefault()
        const form=event.target;
        const email=form.email.value
        const password=form.password.value
        console.log(email,password)
        signInUser(email,password)
.then(result=>{

  e.target.reset()
  navigate("/")
  Swal.fire({
    title: "Good job!",
    text: "Login successful!",
    icon: "success",
  });
})
.catch(error=>{

Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Something went wrong!",
  
});
})
    }

    const handleGoogleSignIn=()=>{
        signInWithGoogle()
        .then(result=>{
      
     
         
          navigate("/")
          Swal.fire({
            title: "Good job!",
            text: "Login successful!",
            icon: "success",
          });
        })
        .catch(error=>{
        
        })
      }
    return (

<div>
    <Helmet>
                     
                                     <title>LoveForever || Login </title>
                                 </Helmet>
                                 <div className=" flex items-center justify-center mt-10  p-10">
            <div className="w-full max-w-md mx-auto">
               <h2 className="text-4xl font-bold text-center mb-4">Please Login</h2>
                <form onSubmit={handleLogin} className="flex max-w-md flex-col gap-4 justify-center  border-2  p-4 ">
                   
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email1" value="Your email" />
                        </div>
                        <TextInput id="email1" type="email" name="email"  placeholder="your email" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password1" value="Your password" />
                        </div>
                        <TextInput id="password1" type="password" name="password"  placeholder="your password" required />
                    </div>
                    <Button className="bg-red-500" type="submit">Submit</Button>
                    <p className="text-center">New To Here? Please <Link className="text-red-600" to="/signup">Register</Link></p>

                </form>



                <p className="flex justify-center items-center p-4">
                <Button onClick={handleGoogleSignIn} className="bg-red-500" type="submit">Google</Button>
                </p>
            </div>
        </div>
</div>


       
    );
};

export default Login;
