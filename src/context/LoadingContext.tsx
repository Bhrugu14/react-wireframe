import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import Lottie from "lottie-web";
import AnimatedData from "../assets/lottie/loading.json";

interface MyContextValue {
  Loading?: boolean;
  setLoading?: (e: any) => void;
}

export const LoadingContext = createContext<MyContextValue | undefined>(
  undefined
);

const LoadingComponent = ({ Loading }: { Loading: boolean }) => {
  useEffect(() => {
    const instance = Lottie.loadAnimation({
      container: document.getElementById("loading"), // the dom element
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: AnimatedData,
    });
    return () => instance.destroy();
  }, [Loading]);
  return (
    <div className="fixed h-screen w-screen bg-loading z-50 flex items-center justify-center">
      <div id="loading" className="w-1/2 h-1/2" />
    </div>
  );
};

export const LoadingContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [Loading, setLoading] = useState(false);

  const contextValue: MyContextValue = {
    Loading,
    setLoading,
  };

  return (
    <LoadingContext.Provider value={contextValue}>
      {Loading && <LoadingComponent Loading={Loading} />}
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoadingContext = () => useContext(LoadingContext);
