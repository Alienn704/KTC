import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import type { User } from "../types";
import AuthContext from "../context";
import { login } from "../service";

const LoginPage = () => {
  const { setUser } = useContext(AuthContext);

  type FormData = {
    email: string;
    password: string;
  };

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    if (data.email === "tungnt@softech.vn" && data.password === "123456789") {
      const result = await login(data.email, data.password);
      console.log("Kết quả từ API:", result);
      const user: User = {
        email: result.loggedInUser.email,
        id: result.loggedInUser.id,
        access_token: result.access_token,
      };

      setUser(user);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("access_token", user.access_token);

      navigate("/tasks");
      console.log("Đăng nhập thành công:", user);
      reset();
    } else {
      alert("Email hoặc mật khẩu không đúng");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-y-4 max-w-md mx-auto mt-20 p-6 border rounded-xl shadow-md"
    >
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
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          {...register("password", {
            required: "Vui lòng nhập mật khẩu",
            minLength: {
              value: 6,
              message: "Mật khẩu ít nhất 6 ký tự",
            },
          })}
          className="p-2 border rounded-md pr-10 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <div
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 cursor-pointer"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
        </div>
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
