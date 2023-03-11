import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextInput } from "../../components";

export const Other = () => {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  return (
    <div className="flex flex-1 items-center justify-center flex-col w-full h-full ">
      <label>Other</label>
      <Button
        title={"GO Back"}
        icon={undefined}
        disabled={undefined}
        onClick={() => navigate(-1)}
        extraClass={"w-full max-w-2xl"}
      />
      <TextInput
        placeholder="enter"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};
