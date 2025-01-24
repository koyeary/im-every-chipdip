import { createContext, useRef, useState } from "react";

const UserContext = createContext();

const defaultUser = {
  name: undefined,
  email: undefined,
  id: undefined,
  github: undefined,
  linkedIn: undefined,
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
  const userRef = useRef(currentUser);

  const saveUser = (values) => {
    if (values) {
      localStorage.setItem("user", JSON.stringify(values));

      userRef.current = values;
      setCurrentUser(values);
    } else {
      localStorage.removeItem("user");
      userRef.current = defaultUser;
      setCurrentUser(defaultUser);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user: userRef,
        currentUser,
        saveUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UserConsumer = UserContext.Consumer;

export default UserContext;
