import React from "react";
import { useForm } from "react-hook-form";
import Nav from '../Components/Nav'

import "./Forms.css"

const Form = () => {
    const [success, setSuccess]=React.useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit=()=>{
    setSuccess(true)
  }
  return (

    <div className="form">
      <Nav/>
        {
            success && (
                <div>
                    <p className="success">Registration Successful!!! </p>
                </div>
            )
        }
      <form action="" className="form" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="">First Name</label>
        <input
          type="text"
          name="firstname"
          {...register("firstname", { required: "First name is required" })}
        />
        {errors.firstname && <p className="err">{errors.firstname.message}</p>}
        <label htmlFor="">Last Name</label>
        <input
          type="text"
          name="lastname"
          {...register("lastname", { required: "Last name is required" })}
        />
        {errors.lastname && <p className="err">{errors.lastname.message}</p>}
        <label htmlFor="">Email</label>
        <input
          type="email"
          name="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Please enter correct Email",
            },
          })}
        />
        {errors.email && <p className="err">{errors.email.message}</p>}
        <label htmlFor="">Contact </label>
        <input
          type="telephone"
          name="phone"
          {...register("phone", {
            required: "Contact is required",
          })}
        />
        {errors.phone && <p className="err">{errors.phone.message}</p>}
        <input type="submit" value="Register" className="btn" />
      </form>
    </div>
  );
};

export default Form;
