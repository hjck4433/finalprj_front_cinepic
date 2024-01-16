import { createContext, useState, useEffect } from "react";
export const UserContext = createContext(null);

const UserStore = (props) => {
  // 로그인 여부
  const [loginStatus, setLoginStatus] = useState(
    localStorage.getItem("loginStatus") || ""
  );

  useEffect(() => {
    localStorage.setItem("loginStatus", loginStatus);
  }, [loginStatus]);

  // 멤버쉽 여부
  const [isMembership, setIsMembership] = useState(
    localStorage.getItem("isKikiMembership") || ""
  );
  useEffect(() => {
    localStorage.setItem("isMembership", isMembership);
  }, [isMembership]);

  return (
    <UserContext.Provider
      value={{
        loginStatus,
        setLoginStatus,
        isMembership,
        setIsMembership,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
export default UserStore;
