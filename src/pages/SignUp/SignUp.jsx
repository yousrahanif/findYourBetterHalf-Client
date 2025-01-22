import { Button, Label, TextInput } from "flowbite-react";
import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom"; 
import { div } from "framer-motion/client";
import { Helmet } from "react-helmet-async";
import { updateProfile } from "firebase/auth";
const SignUp = () => {
    const {createUser, signInWithGoogle} = useContext(AuthContext)
    const navigate= useNavigate()
  //   const saveUserToDB = async (email) => {
  //     console.log('Saving user to DB:', email); 
  //     const response = await fetch('http://localhost:5000/users', {
  //         method: 'POST',
  //         headers: { 'Content-Type': 'application/json' },
  //         body: JSON.stringify({ email, role: 'user' }),
  //     });
  //     const data = await response.json();
  //     console.log('Response from server:', data); 
  // };
   
  
  
  
  
  // const saveUserToDB = async (email) => {
  //   const role = 'user'; 
  //   const member_type = 'normal'; 
  
  //   console.log('Saving user to DB:', email, member_type);
  
  //   const response = await fetch('http://localhost:5000/users', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ email, role, member_type }), 
  //   });
  
  //   const data = await response.json();
  //   console.log('Response from server:', data);
  // };

  const saveUserToDB = async (email, displayName) => {
    const role = 'user';
    const member_type = 'normal';
  
    console.log('Saving user to DB:', email, member_type, displayName);
  
    const response = await fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, role, member_type, displayName }),
    });
  
    const data = await response.json();
    console.log('Response from server:', data);
  };
  
  const handleSignUp=(event)=>{
        event.preventDefault()
        const form=event.target;
        const email=form.email.value
        const password=form.password.value
        const name=form.name.value
        const photo=form.photo.value
        console.log(name,email,password,photo)


//         createUser(email,password)
// .then(result=>{


//     const user = result.user; 

//     saveUserToDB(user.email, user.displayName);

   

//       navigate("/");
//       Swal.fire({
//         title: "Good job!",
//         text: "Register successful!",
//         icon: "success",
//       });
      
    
    
//     })
//     .catch((error) => {
//       console.error("Profile Update Error:", error.message);
//       Swal.fire({
//         icon: "error",
//         title: "Profile Update Failed",
//         text: error.message || "Unable to update the profile.",
//       });
//     });

  
createUser(email, password)
  .then(result => {
    const user = result.user;

    updateProfile(user, {
      displayName: name,
      photoURL: photo
    })
    .then(() => {
      saveUserToDB(user.email, user.displayName);

      navigate("/");
      Swal.fire({
        title: "Good job!",
        text: "Register successful!",
        icon: "success",
      });
    })
    .catch((error) => {
      console.error("Profile Update Error:", error.message);
      Swal.fire({
        icon: "error",
        title: "Profile Update Failed",
        text: error.message || "Unable to update the profile.",
      });
    });
  })
  .catch((error) => {
    console.error("SignUp Error:", error.message);
    Swal.fire({
      icon: "error",
      title: "SignUp Failed",
      text: error.message || "Unable to sign up.",
    });
  });


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
          const user = result.user; 
          saveUserToDB(user.email, user.displayName);
    })
        .catch(error=>{
        
        })
      }
    return (

      <div>
        <Helmet>
                   
                                   <title>LoveForever || Register </title>
                               </Helmet>
          <div className=" flex items-center justify-center mt-10  p-10">
        <div className="w-full max-w-md mx-auto">
           <h2 className="text-4xl font-bold text-center mb-4">Please Signup</h2>
            <form onSubmit={handleSignUp} className="flex max-w-md flex-col gap-4 justify-center  border-2  p-4 ">


                 <div>
                    <div className="mb-2 block">
                        <Label htmlFor="name" value="Your name" />
                    </div>
                    <TextInput id="name1" type="text" name="name"  placeholder="Your Name" required />
                </div> 
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
                    <TextInput id="password1" type="password" name="password" placeholder="type your password" required />
                </div>


                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="photo" value="Your Photo URL" />
                    </div>
                    <TextInput id="photo1" type="text" name="photo" placeholder="your photo URL" required />
                </div>
                
                <Button className="bg-red-500" type="submit">Submit</Button>
                <p className="text-center">Already Have an Account? Please <Link className="text-red-600" to="/login">Login</Link></p>

            </form>



            <p className="flex justify-center items-center p-4">
            <Button  onClick={handleGoogleSignIn} className="bg-red-500" type="submit">Google</Button>
            </p>
        </div>
    </div>
      </div>
    );
};

export default SignUp;