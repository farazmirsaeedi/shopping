import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [user, setUser] = useState("");
  const [Password, setPassword] = useState("");

  const navigate = useNavigate();

    const handleUser = (e)=>{
        setUser(e.target.value);
    };
    const handlePassword = (e)=>{
        setPassword(e.target.value);
    };

  const handleSubmit = () => {
    if(user === "" || Password === ""){
        toast.error("please fill inputs")
    }
    else{
    toast.success("Login Successed");
    navigate("/");
    }
  };
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center bg-orange-100">
        <div className="w-72 sm:w-80 p-5 border border-orange-400 rounded-lg bg-white">
          <h1 className="text-xl text-center">Log In</h1>
          <div className="flex flex-col gap-1">
            <label htmlFor="user">Username</label>
            <input
            value={user}
            onChange={handleUser}
              className="mb-2 border border-orange-400 rounded-md p-1"
              id="user"
              type="text"
            />
            <label htmlFor="Password">Password</label>
            <input
            value={Password}
            onChange={handlePassword}
              className=" border border-orange-400 rounded-md p-1"
              id="Password"
              type="password"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="w-full mt-6 bg-orange-400 hover:bg-orange-500 transition duration-100 rounded-md text-white uppercase p-2 "
          >
            Log In
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
