import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import Lottie from "lottie-web";
import AnimatedData from "../assets/lottie/loading.json";

export const LoadingContext = createContext(null);

export const LoadingContextProvider = ({ children }: any) => {
  const [Loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const instance = Lottie.loadAnimation({
      container: document.querySelector("#loading"), // the dom element
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: AnimatedData,
    });

    return () => instance.destroy();
  }, [Loading]);

  const contextValue = useMemo(
    () => ({
      Loading,
      setLoading,
    }),
    [Loading]
  );

  return (
    <LoadingContext.Provider value={contextValue}>
      {Loading && (
        <div className="fixed h-screen w-screen bg-loading z-50 flex items-center justify-center">
          <div id="loading" className="w-1/2 h-1/2" />
        </div>
      )}
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoadingContext = () => useContext(LoadingContext);
