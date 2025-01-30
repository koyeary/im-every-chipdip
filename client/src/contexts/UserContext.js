import { createContext, useState } from "react";

const UserContext = createContext();

const defaultUser = {
  name: "",
  email: "",
  id: "",
  github: "",
  linkedIn: "",
};

const extractUser = () => {
  let v = localStorage.getItem("user");
  if (v === "undefined") {
    localStorage.removeItem("user");
    return defaultUser;
  } else if (v === null) return defaultUser;

  let now = Date.now() / 1000;
  try {
    let u = JSON.parse(localStorage.getItem("user"));
    if (!u.token || !u.token.id) return defaultUser;

    let strs = u.token.id.split(".");
    let j = JSON.parse(atob(strs[1]));

    if (
      u.token.type === "Microsoft" ||
      u.token.type === "Google" ||
      u.token.type === "Local"
    ) {
      if (j.exp > now) localStorage.removeItem("user");
      return defaultUser;
    } else {
      localStorage.removeItem("user");
      return defaultUser;
    }
  } catch (error) {
    console.log(error);
  }
  return defaultUser;
};

//Axios Section
export const UserProvider = ({ children, user }) => {
  const [currentUser, setCurrentUser] = useState(user || extractUser());

  const saveUser = (values) => {
    if (values) {
      localStorage.setItem("user", JSON.stringify(values));

      setCurrentUser(values);
      console.log("User saved");
    } else {
      localStorage.removeItem("user");

      setCurrentUser(defaultUser);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setCurrentUser(defaultUser);
  };

  return (
    <UserContext.Provider
      value={{
        user: currentUser,
        saveUser,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UserConsumer = UserContext.Consumer;

export default UserContext;
