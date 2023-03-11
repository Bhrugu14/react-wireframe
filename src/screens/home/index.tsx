import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components";
import { useLoadingContext } from "../../context";

export const Home = () => {
  const navigate = useNavigate();
  const { setLoading } = useLoadingContext();

  const onChangeLocation = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/other");
    }, 2000);
  };

  return (
    <div className="flex items-center justify-center flex-col w-full h-[800px]">
      <label>HOME</label>
      <Button
        title={"GO TO OTHER Screen"}
        icon={undefined}
        disabled={undefined}
        onClick={() => onChangeLocation()}
        extraClass={"w-full max-w-2xl"}
      />
    </div>
  );
};
