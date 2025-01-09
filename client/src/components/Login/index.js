import { useState } from "react";
import { createNewUser, authenticateUser } from "../../utils/API";
import useUser from "../../hooks/useUser";

const Login = () => {
  const [createUser, setCreateUser] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    rePassword: "",
  });

  const { name, email, password, rePassword } = formData;
  const { user, saveUser } = useUser();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here

    createUser && password !== rePassword
      ? console.log("Passwords do not match")
      : createUser && password === rePassword
      ? createNewUser(name, email, password, saveUser)
      : authenticateUser(email, password, saveUser);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        {createUser && (
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              required={createUser}
            />
          </div>
        )}
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
        </div>

        {createUser && (
          <div>
            <label>Re-enter Password:</label>
            <input
              type="password"
              name="rePassword"
              value={rePassword}
              onChange={handleChange}
              required
            />
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
      <button onClick={() => setCreateUser(!createUser)}>
        {createUser ? "Login" : "Create User"}
      </button>
    </div>
  );
};

export default Login;
