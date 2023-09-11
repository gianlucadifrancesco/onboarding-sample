import { ButtonHTMLAttributes } from "react";

export interface IButton {
  text: string;
  onPress: () => void;
  isDark?: boolean;
}

export default function Button({
  text,
  onPress,
  isDark = false,
  disabled = false,
  style,
  ...rest
}: ButtonHTMLAttributes<any> & IButton) {
  return (
    <button
      className="Button"
      type="button"
      onClick={onPress}
      style={{
        ...(disabled
          ? { backgroundColor: "var(--gray)" }
          : isDark
          ? { backgroundColor: "var(--black)", color: "#fff" }
          : { backgroundColor: "#fff", color: "var(--black)" }),
        ...style,
      }}
      disabled={disabled}
      {...rest}
    >
      <b style={disabled ? { color: "var(--gray-darker)" } : {}}>{text}</b>
    </button>
  );
}
