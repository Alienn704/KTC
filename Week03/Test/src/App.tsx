import "./App.css";
import UserForm from "./Pages/UserForm";
import UserList from "./Pages/UserList";
import { UserProvider } from "./Pages/UserProvider";

import { BrowserRouter, Routes, Route, NavLink } from "react-router";
function App() {
  return (
    <>
      <UserProvider>
        <h1></h1>
        <BrowserRouter>
          <nav>
            <NavLink to="/" style={{ marginRight: 10 }}>
              Home
            </NavLink>
            <NavLink to="/users">Users</NavLink>
          </nav>

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <UserForm />
                  <UserList />
                </>
              }
            />
            <Route path="/users" element={<UserList />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </>
  );
}

export default App;
