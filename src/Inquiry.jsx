import React, { useState } from "react";

const Inquiry = () => {
  const [data,setData]=useState({
    fristName:"",
    lastname:"",
    adharcardnumber:"",
    pancardnumber:"",
    Phone:"",
    address:"",
    pincode:"",
    city:"",
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
      `My fristname is ${data.fristName},My lastname is ${data.lastname}, and my adhar number is ${data.adharcardnumber}, my pan card number is ${data.pancardnumber},
      my mobile number is${data.Phone},my address is ${data.address},my City name is ${data.city},my Pincode number is${data.pincode}`)
  };
  return (
    <>
      <div className="my-5">
        <div className="text-center">Inquiry us</div>
      </div>
      <div className="container Inquiry_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>

              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">First Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" name="fristName" onChange={InputEvent}  placeholder="Enter Your FristName" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Last Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" name="lastname" onChange={InputEvent}  placeholder="Enter Your LastName" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Adhar Card Number</label>
                <input type="" className="form-control" id="exampleFormControlInput2" name="adharcardnumber" onChange={InputEvent} placeholder="Enter Your Adhar Card Number" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Pan Card Number</label>
                <input type="" className="form-control" id="exampleFormControlInput2" name="pancardnumber" onChange={InputEvent} placeholder="Enter Your Pan Card Number" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Phone</label>
                <input type="number" className="form-control" id="exampleFormControlInput2" name="Phone" onChange={InputEvent} placeholder="Enter Your Mobile Number" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Address</label>
                <input type="text" className="form-control" id="exampleFormControlInput3" name="address" onChange={InputEvent} placeholder="Enter Your Address" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">City</label>
                <input type="text" className="form-control" id="exampleFormControlInput3" name="city" onChange={InputEvent} placeholder="Enter Your City" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Pin-code</label>
                <input type="number" className="form-control" id="exampleFormControlInput2" name="pincode" onChange={InputEvent} placeholder="Enter Your Pin-code Number" />
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

export default Inquiry;