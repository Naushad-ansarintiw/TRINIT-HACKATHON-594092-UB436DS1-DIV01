import React, { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
// import  "https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css"



const Signup = () => {

  // this is for storing redirecting history
  const history = useHistory();
  
  //for taking field values 
  let user,setUser;

  // creating hooks
  [user, setUser] = useState({ name: "", email: "", password: "", cpassword: "" });

  let name, value;

  //on filling field event 
  const handleInputs = (e) => {
    console.log(e);

    //e.target.name whenever user input in the field the name of that field is stored in name variable
    name = e.target.name;

    //e.target.name whenever user input in the field the value of that field is stored in value variable
    value = e.target.value;

    setUser({ ...user, [name]: value })
    
  }

//for posting data to server 
const postData= async(e) =>{

  //this is for prevention page from loading on posting data or event occur
  e.preventDefault();

  //this is for storing data filled by user in input field
  const {name,  email, password, cpassword} =user;


  // this is for taking data from client side to server
  const res= await fetch("http://localhost:5000/api/philanthropic/register",{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
      "Accept":"application/json",
    },

    // when we send data to server we have to change json into string
    body: JSON.stringify({
      name,email,  password, cpassword
    })
  });

  //server in return of accepting or rejecting data send a response 
  const data =await res.json();
  
  if(data.status=== 422 || !data){
    window.alert("Invalid Registeration")
  }
  
  
  else{
    window.alert("Registeration Successfull");
    console.log("Registeration Successfull");

    history.push("/login/plentropist");
  }

}


  return (

    <>
      <section className="text-center">
        <main className="form-signin w-100 m-auto">

          <form>
            <h1 className="h3 mb-3 fw-normal">New User Sign-Up</h1>

            <div className="form-floating">
              <input type="text" name="name" className="form-control top"
                value={user.name}
                onChange={handleInputs}
                placeholder="First Name" />
              <label for="floatingInput">First Name</label>
            </div>

            <div className="form-floating">
              <input type="Email" name="email" className="form-control last"
                value={user.email}
                onChange={handleInputs}
                placeholder="Email" />
              <label for="floatingPassword">Student-Email-ID</label>
            </div>

            <div className="form-floating">
              <input type="password" name="password" className="form-control last"
                value={user.password}
                onChange={handleInputs}
                placeholder="Email" />
              <label htmlFor="floatingPassword">Password</label>
            </div>

            <div className="form-floating">
              <input type="password" name="cpassword" className="form-control last"
                value={user.cpassword}
                onChange={handleInputs}
                placeholder="Email" />
              <label for="floatingPassword">ConfirmPassword</label>
            </div>

            <NavLink to="/login/plentropist">Already Registered</NavLink>
            <input className="w-100 btn btn-lg btn-primary" type="submit" value="register" onClick={postData}/>
            <p className="mt-5 mb-3 text-muted">&copy; 2022-2023 </p>
          </form> 
        </main>
      </section>
    </>
  )
}

export default Signup