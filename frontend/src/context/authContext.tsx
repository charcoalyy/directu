import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

interface AuthContextType {
  userInfo: {
    email: string;
    username: string;
  };
  loggedIn: boolean;
  login: () => Promise<void>;
  logout: () => void;
}

// creates context object with a default state
const AuthContext = createContext<AuthContextType>({} as AuthContextType);

// defines the wrapper whose state is accessible to children
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [userInfo, setUserInfo] = useState({} as AuthContextType["userInfo"]);
  const [loggedIn, setLoggedIn] = useState(false);

  const login = useCallback(async () => {
    try {
      // TODO: when login API is defined, replace response with awaiting login API
      const response: any = {
        email: "placeholder@gmail.com",
        username: "placeholder",
      };
      if (response.ok) {
        setUserInfo(response);
      }
      setLoggedIn(true);
    } catch (err: any) {
      console.log("Error: ", err);
    }
  }, []);

  const logout = useCallback(() => {
    setLoggedIn(false);
    setUserInfo({} as AuthContextType["userInfo"]);
  }, [setUserInfo]);

  const authState = useMemo(
    () => ({ userInfo, loggedIn, login, logout }),
    [userInfo, loggedIn, login, logout]
  );

  return (
    <AuthContext.Provider value={authState}>{children}</AuthContext.Provider>
  );
};

// allows consumers to use context values
export default function useAuth() {
  return useContext(AuthContext);
}
