
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useUser } from "./UserProvider";
const schema = yup.object({
  name: yup.string().required("Name is required").min(2, "Minimum 2 characters"),
  email: yup.string().required("Email is required").email("Invalid email"),
  age: yup
    .number()
    .typeError("Age must be a number")
    .positive("Age must be positive")
    .nullable()
    .transform((v, o) => (o === "" ? null : v)),
});

const UserForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const { addUser } = useUser(); 
  const onSubmit = (data: any) => {
    console.log("Submitted:", data);
    addUser(data);
    reset(); 
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name:</label>
        <input {...register("name")} />
        <p>{errors.name?.message}</p>
      </div>

      <div>
        <label>Email:</label>
        <input {...register("email")} />
        <p>{errors.email?.message}</p>
      </div>

      <div>
        <label>Age:</label>
        <input {...register("age")} type="number" />
        <p>{errors.age?.message}</p>
      </div>

      <button type="submit">Add User</button>
    </form>
  );
};

export default UserForm;
