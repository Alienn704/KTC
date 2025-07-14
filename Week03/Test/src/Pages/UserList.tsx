import React from "react";
import { useUser } from "./UserProvider";
import { Link } from "react-router";

const UserList = () => {
  const { users } = useUser();

  return (
    <div>
      <h3>User List</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>
              {user.name} - {user.email} - {user.age ?? "N/A"}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
