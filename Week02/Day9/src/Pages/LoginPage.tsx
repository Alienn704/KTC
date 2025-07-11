"use client";
import { useForm } from "react-hook-form";
import { useState, useContext } from "react";

import AuthContext from "../context";
import { login } from "../service";
import type { User } from "../types";

type FormData = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const [errorMsg, setErrorMsg] = useState<string>("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const { setUser } = useContext(AuthContext);

  const onSubmit = async (data: FormData) => {
    try {
      const result = await login(data.email, data.password);
      const user: User = {
        id: result.loggedInUser.id,
        email: result.loggedInUser.email,
        access_token: result.access_token,
      };
      setUser(user);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("access_token", user.access_token);
      window.location.href = "/tasks";

      reset();
    } catch (err: any) {
      setErrorMsg("Email hoặc mật khẩu không đúng");
      console.error("Login error:", err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-y-4 max-w-md mx-auto mt-20 p-6 border rounded-xl shadow-md"
    >
      <h2 className="text-2xl font-bold mb-2 text-center">Login</h2>
      {errorMsg && <p className="text-red-500 text-center">{errorMsg}</p>}
      <div className="flex flex-col gap-1">
        <input
          type="email"
          placeholder="Email"
          {...register("email", {
            required: "Vui lòng nhập email",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Email không hợp lệ",
            },
          })}
          className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1 relative">
        <input
          type="password"
          placeholder="Password"
          {...register("password", {
            required: "Vui lòng nhập mật khẩu",
            minLength: {
              value: 6,
              message: "Mật khẩu ít nhất 6 ký tự",
            },
          })}
          className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition duration-200"
      >
        Log in
      </button>
    </form>
  );
};

export default LoginPage;
