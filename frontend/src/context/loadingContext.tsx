import { ReactNode, createContext, useContext, useMemo, useState } from "react";

interface LoadingContextType {
  loading: boolean;
  setLoading: (state: boolean) => void;
}

// creates context object with a default state
const LoadingContext = createContext<LoadingContextType>(
  {} as LoadingContextType
);

// defines the wrapper whose state is accessible to children
export const LoadingProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(false);

  const loadingState = useMemo(
    () => ({ loading, setLoading }),
    [loading, setLoading]
  );

  return (
    <LoadingContext.Provider value={loadingState}>
      {children}
    </LoadingContext.Provider>
  );
};

// allows consumers to use context values
export default function useLoading() {
  return useContext(LoadingContext);
}
