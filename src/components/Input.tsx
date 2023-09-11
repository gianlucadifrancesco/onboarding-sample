import { InputHTMLAttributes } from "react";

export interface IInput {
  value: string;
  setValue: (value: string) => void;
}

export default function Input({
  value,
  setValue,
  ...rest
}: InputHTMLAttributes<any> & IInput) {
  return (
    <div style={{ position: "relative" }}>
      <input
        className="Input"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{ ...(rest.type === "number" && { paddingRight: 50 }) }}
        {...rest}
      />
      {rest.type === "number" && (
        <span
          style={{ position: "absolute", right: 20, bottom: 16, fontSize: 19 }}
        >
          Kg
        </span>
      )}
    </div>
  );
}
