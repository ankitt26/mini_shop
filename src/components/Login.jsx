import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchUser } from "../redux/login/loginSlice";
import { TbLoader3 } from "react-icons/tb";

export default function Login() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const { isLoading, error } = useSelector((state) => state.login);
  const dispatch = useDispatch();

  const submitdata = (e) => {
    e.preventDefault();
    const Credentials = {
      username: username,
      password: password,
    };
    dispatch(FetchUser(Credentials));
  };

  const errorhere = () => {
    if (error) {
      return <p className="text-red-400">⚠️ Invalid Username or Password</p>;
    }
  };

  const loader = () => {
    if (isLoading) {
      return <TbLoader3 className="animate-spin text-4xl text-blue-300" />;
    }
  };

  return (
    <section className="flex h-screen items-center justify-center bg-gray-900">
      <div className="mx-auto flex w-[500px] flex-col items-center justify-center gap-10 rounded-md border-none bg-gray-800 py-10 shadow-md sm:w-11/12">
        <h2 className="text-3xl font-bold leading-tight tracking-tight text-gray-300">
          Login here
        </h2>
        <form
          className="[w-400px] flex w-full flex-col items-center justify-start gap-4 px-12 sm:w-full sm:px-6"
          onSubmit={submitdata}
        >
          <div className="flex w-full flex-col gap-2">
            <label
              htmlFor="username"
              className="text-sm font-medium text-gray-300"
            >
              Your username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              className="h-10 w-full rounded-md border border-gray-300 bg-gray-50 pl-2 text-gray-900"
              placeholder="username"
              autoComplete="username"
              onChange={(e) => setusername(e.target.value)}
              value={username}
              required
            />
          </div>

          <div className="flex w-full flex-col gap-2">
            <label
              htmlFor="password"
              className=" text-sm font-medium text-gray-300"
            >
              Password
            </label>

            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              autoComplete="current-password"
              onChange={(e) => setpassword(e.target.value)}
              value={password}
              className="h-10 w-full rounded-md border border-gray-300 bg-gray-50 pl-2 text-gray-900 sm:text-sm "
              required
            />
          </div>
          {errorhere()}
          {loader()}
          <button
            type="submit"
            className="mt-5 flex w-full justify-center rounded-md bg-blue-800 px-8 py-3 text-white"
          >
            Sign in
          </button>

          <div>
            <p className="text-sm font-light text-gray-500">
              Not a member?{" "}
              <a
                href="#"
                className="text-primary-600 font-medium hover:underline"
              >
                SignUp
              </a>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
