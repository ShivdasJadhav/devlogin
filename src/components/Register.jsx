import React, { useState } from "react";
import "./Register.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from 'axios';
const registerSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  userName: yup.string().required(),
  password: yup.string().required(),
  confirmPass: yup.string().oneOf([yup.ref("password"), null]),
  address: yup.string().required(),
  phoneNo: yup.number().min(10).required(),
});

function Register() {
  const [userData, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    userName: "",
    password: "",
    confirmPass: "",
    address: "",
    phoneNo: "",
  });
  let name, value;
  const saveData = (e) => {
    name = e.target.name;
    value = e.target.value;
    setData({ ...userData, [name]: value });
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });
   function submitData(e){
    alert("Registered successfully!")
      // const {
      //   firstName,
      //   lastName,
      //   email,
      //   userName,
      //   password,
      //   confirmPass,
      //   address,
      //   phoneNo,
      // } = userData;
      // axios.post("http://localhost:4002/register",{
      //   fname: firstName,
      //   lname: lastName,
      //   email: email,
      //   userId: userName,
      //   pass: password,
      //   address: address,
      //   phone: phoneNo,
      // }).then((res)=>{
      //   console.log(res);
      //   alert('data sended!')
      // })
};
  return (
    <form method="POST" onSubmit={handleSubmit(submitData)}>
      <div id="registerForm" className="grid grid-cols-2 gap-4">
        <div className="form-group mb-6">
          <input autoComplete="off"
            {...register("firstName")}
            type="text"
            name="firstName"
            value={userData.fname}
            onChange={saveData}
            className="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleInput123"
            aria-describedby="emailHelp123"
            placeholder="First name"
          />
          <p className="alert">{errors.firstName?.message}</p>
        </div>
        <div className="form-group mb-6">
          <input autoComplete="off"
            {...register("lastName")}
            type="text"
            name="lastName"
            value={userData.lname}
            onChange={saveData}
            className="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleInput124"
            aria-describedby="emailHelp124"
            placeholder="Last name"
          />
          <p className="alert">{errors.lastName?.message}</p>
        </div>
      </div>
      <div className="form-group mb-6">
        <input autoComplete="off"
          {...register("email")}
          type="email"
          name="email"
          value={userData.email}
          onChange={saveData}
          className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id="exampleInput125"
          placeholder="Email address"
        />
        <p className="alert">{errors.email?.message}</p>
      </div>
      <div className="form-group mb-6">
        <input autoComplete="off"
          {...register("userName")}
          type="text"
          name="userName"
          value={userData.userName}
          onChange={saveData}
          className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id="exampleInput132"
          placeholder="Username"
        />
        <p className="alert">{errors.userName?.message}</p>
      </div>
      <div className="form-group mb-6">
        <input autoComplete="off"
          {...register("address")}
          type="text"
          name="address"
          value={userData.address}
          onChange={saveData}
          className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id="exampleInput132"
          placeholder="Address"
        />
        <p className="alert">{errors.address?.message}</p>
      </div>
      <div className="form-group mb-6">
        <input autoComplete="off"
          {...register("phoneNo")}
          name="phoneNo"
          value={userData.phone}
          onChange={saveData}
          className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id="exampleInput132"
          placeholder="Phone No."
          size="10"
        />
        <p className="alert">
          {errors.phoneNo && "please Provide the correct Number"}
        </p>
      </div>
      <div className="form-group mb-6">
        <input autoComplete="off"
          {...register("password")}
          type="text"
          name="password"
          value={userData.pass}
          onChange={saveData}
          className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id="exampleInput132"
          placeholder="Password"
        />
        <p className="alert">{errors.password?.message}</p>
      </div>
      <div className="form-group mb-6">
        <input autoComplete="off"
          {...register("confirmPass")}
          type="text"
          name="confirmPass"
          value={userData.cpass}
          onChange={saveData}
          className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id="exampleInput132"
          placeholder="Confirm Password"
        />
        <p className="alert">
          {errors.confirmPass && "passwords should match!"}
        </p>
      </div>
      
     
      <button
        type="submit"
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
        className="inline-block px-6 py-2.5 mb-6 w-full bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
      >
        Register
      </button>
    </form>
  );
}
export default Register;
