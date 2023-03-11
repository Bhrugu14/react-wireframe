import React from "react";

interface TextInputProps {
  name?: string;
  type?: string;
  value?: string;
  onChange?: (e: any) => void;
  extraClassName?: string;
  onFocus?: (e: any) => void;
  onBlur?: (e: any) => void;
  id?: string;
  placeholder: string;
  maxLength?: number;
  minLength?: number;
  isError?: boolean;
  autoComplete?: "on" | "off" | "new-password";
}

export const TextInput = ({
  name,
  type = "text",
  value,
  onChange,
  extraClassName = "",
  onFocus,
  onBlur,
  id,
  placeholder = "",
  maxLength = 50,
  minLength = 0,
  isError = false,
  autoComplete = "on",
}: TextInputProps) => {
  return (
    <input
      autoComplete={autoComplete}
      maxLength={maxLength}
      minLength={minLength}
      id={id}
      placeholder={placeholder}
      onFocus={onFocus}
      onBlur={onBlur}
      name={name}
      className={`border-b ${
        isError ? "border-red-700" : "border-gray-300"
      } text-sm text-white pb-2 w-full ${
        isError ? "focus:border-red-700" : "focus:border-lineColor"
      } ${extraClassName} ${isError && "animate-pulse_finite"} bg-transparent`}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
};
