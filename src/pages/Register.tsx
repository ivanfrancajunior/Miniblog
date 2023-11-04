import React from 'react'
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="min-h-[calc(100vh-200px)] h-auto px-6  container mx-auto">

      <div className="mt-6 px-6 min-h-[60vh] h-auto bg-pink-300 mb-6">
        <h2>Create account</h2>

        <h3 className="mt-4">
          Register to get started.
        </h3>
        <form className="flex flex-col items-center justify-between mt-6 gap-4 w-full">
          <div className="flex flex-col w-[90%] gap-2">
            <label className="flex flex-col h-16 bg-cyan-200">
              <h2>Name</h2>
              <input
                type="text"
                name=""
                id=""
                className="p-1 min-w-[300px] border-2 border-black rounded-md "
              />
            </label>
            <label className="flex flex-col h-16 bg-cyan-200">
              <h2>E-mail</h2>
              <input
                type="text"
                name=""
                id=""
                className="p-1 min-w-[300px] border-2 border-black rounded-md "
              />
            </label>
            <label className="flex flex-col h-16 bg-cyan-200">
              <h2>password</h2>
              <input
                type="text"
                name=""
                id=""
                className="p-1 min-w-[300px] border-2 border-black rounded-md "
              />
            </label>
            <label className="flex flex-col h-16">
              <h2>Confirm password</h2>
              <input
                type="text"
                name=""
                id=""
                className="p-1 min-w-[300px] border-2 border-black rounded-md"
              />
            </label>
          </div>
          <button className="flex items-center justify-center w-[80%] text-white p-2 rounded-md bg-[#162D3A]">
            Sign in
          </button>
        </form>
        <div className="items-center justify-center mt-8">
          <p className="text-center">Or sign in with</p>
        </div>
        <div className="flex items-center justify-center gap-4 mt-4">
          <button className="p-2 border-2 border-black rounded-md">google</button>
          <button className="p-2 border-2 border-black rounded-md">github</button>
        </div>
        <div className="mt-6">
          <h2 className="text-center  w-full p-2">
            Don't you have an account?{" "}
            <span className="text-blue-500">
              <Link to={"/signin"}>Login</Link>
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Register