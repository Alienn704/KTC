import React from "react";
import { useUser } from "./UserProvider";
import { Link } from "react-router-dom";

const UserList = () => {
  const { users } = useUser();

  return (
    <div>
      <h3>User List</h3>
      <table border={1} cellPadding={8} cellSpacing={0}>
        <thead>
          <tr style={{ backgroundColor: "#f0f0f0" }}>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Detail</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.age ?? "N/A"}</td>
              <td>
                <Link to={`/users/${user.id}`}>View</Link>
              </td>
            </tr>
          ))}
          {users.length === 0 && (
            <tr>
              <td colSpan={5} style={{ textAlign: "center" }}>
                No users found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
