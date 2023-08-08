import React from "react";
import "./Login.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const loginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

 async function submitLoginForm(e) {
    // const { email, password } = e;
    // // e.preventDefault();
    
    //   const response = await fetch("http://localhost:3000/api/auth", {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   });
    //   if (!response.ok) {
    //     throw new Error(`Error! status: ${response.status}`);
    //   }
    //   const data = await response.json();
    //   console.log(data);
    
    // response();
    alert("Invalid Credentioals!");
  }

  
 
  return (
    <form  onSubmit={handleSubmit(submitLoginForm)}>
      <div className="form-group mb-6">
        {" "}
        <input
          type="email"
          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          placeholder="Email address"
          name="email"
          {...register("email")}
        />
        <p className="alert">{errors.email?.message}</p>
      </div>
      <div className="form-group mb-6">
        {" "}
        <input
          type="password"
          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          placeholder="Password"
          name="password"
          {...register("password")}
        />
        <p className="alert">{errors.password?.message}</p>
      </div>
      <button
        type="submit"
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
       className="inline-block px-6 py-2.5 mb-6 w-full bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
      >
        Login
      </button>
    </form>
  );
}
export default Login;
