import { useEffect } from "react";
import { createContext, useCallback, useContext, useState } from "react";

const ProfileContex = createContext();
const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState();
  const handleSetProfile = useCallback((data) => {
    setProfile(data);
  }, []);

  const [repositories, setRepositories] = useState();
  const handleSetRepositories = useCallback((data) => {
    setRepositories(data);
  }, []);

  useEffect(() => {
    handleSetRepositories(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile]);

  return (
    <ProfileContex.Provider
      value={{
        profile,
        handleSetProfile,
        repositories,
        handleSetRepositories,
      }}
    >
      {children}
    </ProfileContex.Provider>
  );
};

export const useProfile = () => {
  const context = useContext(ProfileContex);

  const {
    profile,
    handleSetProfile,

    repositories,
    handleSetRepositories,
  } = context;

  return {
    profile,
    handleSetProfile,
    repositories,
    handleSetRepositories,
  };
};

export default ProfileProvider;
