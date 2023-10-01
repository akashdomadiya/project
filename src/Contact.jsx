import React, { useState } from "react";

const Contact = () => {
  const [data,setData]=useState({
    fullName:"",
    Phone:"",
    email:"",
    msg:"",
  });

  const InputEvent =(event)=>{
    const {name,value}=event.target;
    setData((preVal)=>{
      return{
        ...preVal,
        [name]:value,
      };
    });
  };




  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `My name is ${data.Fullname}.My mobile number is ${data.Phone}, and email is ${data.email}, Here is what I want to say ${data.msg}`)
  };
  return (
    <>
      <div className="my-5">
        <div className="text-center">Contact us</div>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>

              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" name="fullname" onChange={InputEvent}  placeholder="Enter Your Name" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Phone</label>
                <input type="" className="form-control" id="exampleFormControlInput2" name="Phone" onChange={InputEvent} placeholder="Enter Your Mobile Number" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput3" name="email" onChange={InputEvent} placeholder="name@example.com" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                <textarea className="form-control" id="exampleFormControlTextarea4" name="msg"onChange={InputEvent} rows="3"></textarea>
              </div>
              <div className="col-12">
                <button className="btn-outline-primary" type="submit">Submit form</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;