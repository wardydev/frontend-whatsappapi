import React from "react";

export const ProfileContext = React.createContext();
const ProfileProvider = ({ children }) => {
  const profile = "profile contextnih bos";

  return (
    <ProfileContext.Provider value={{ profile }}>
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileProvider;
