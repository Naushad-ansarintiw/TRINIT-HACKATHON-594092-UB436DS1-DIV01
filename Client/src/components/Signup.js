import React, { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'

const Signup = () => {

  // this is for storing redirecting history
  const history = useHistory();
  
  //for taking field values 
  let user,setUser;

  // creating hooks
  [user, setUser] = useState({ fname: "", lname: "", email: "", rollno: "", password: "", cpassword: "" });

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
  const {fname, lname, email, rollno, password, cpassword} =user;


  // this is for taking data from client side to server
  const res= await fetch("/register",{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
      "Accept":"application/json",
    },

    // when we send data to server we have to change json into string
    body: JSON.stringify({
      fname, lname, email, rollno, password, cpassword
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

    history.push("/login");
  }

}


  return (

    <>
      <section className="text-center">
        <main className="form-signin w-100 m-auto">

          <form>
            <h1 className="h3 mb-3 fw-normal">New User Sign-Up</h1>

            <div className="form-floating">
              <input type="text" name="fname" className="form-control top"
                value={user.fname}
                onChange={handleInputs}
                placeholder="First Name" />
              <label for="floatingInput">First Name</label>
            </div>

            <div className="form-floating">
              <input type="text" name="lname" className="form-control middle"
                value={user.lname}
                onChange={handleInputs}
                placeholder="Second Name" />
              <label for="floatingPassword">Second Name</label>
            </div>

            <div className="form-floating">
              <input type="Email" name="email" className="form-control last"
                value={user.email}
                onChange={handleInputs}
                placeholder="Email" />
              <label for="floatingPassword">Student-Email-ID</label>
            </div>

            <div className="form-floating">
              <input type="text" name="rollno" className="form-control last"
                value={user.rollno}
                onChange={handleInputs}
                placeholder="Email" />
              <label for="floatingPassword">RollNo</label>
            </div>

            <div className="form-floating">
              <input type="password" name="password" className="form-control last"
                value={user.password}
                onChange={handleInputs}
                placeholder="Email" />
              <label for="floatingPassword">Password</label>
            </div>

            <div className="form-floating">
              <input type="password" name="cpassword" className="form-control last"
                value={user.cpassword}
                onChange={handleInputs}
                placeholder="Email" />
              <label for="floatingPassword">ConfirmPassword</label>
            </div>

            <NavLink to="/login">Already Registered</NavLink>
            <input className="w-100 btn btn-lg btn-primary" type="submit" value="register" onClick={postData}/>
            <p className="mt-5 mb-3 text-muted">&copy; 2022-2023 </p>
          </form>
        </main>
      </section>
    </>
  )
}

export default Signup