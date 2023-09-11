import { useDispatch } from "react-redux";
import Button from "../../components/Button";
import SuccessImg from "../../Resources/assets/Illustration.png";
import userSlice from "../../store/slices/userSlice";
import { useHistory } from "react-router-dom";

import "./Success.css";

// Preload image
new Image().src = SuccessImg;

export default function FinalPage() {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <img
        src={SuccessImg}
        alt="Success"
        className="success-img"
        style={{ marginTop: 44, width: "80%" }}
      />
      <h2 style={{ marginTop: 42, fontSize: 32, letterSpacing: 1.2 }}>
        You did it!
        <br />
        Let's get moving!
      </h2>
      <p
        style={{
          color: "var(--white70)",
          fontSize: 14,
          lineHeight: "18px",
          padding: "22px 55px 0",
          letterSpacing: 0.2,
        }}
      >
        Personalized plan, diet and a fitness coach! Everything ready when you
        are, let's get started!
      </p>
      <Button
        text="Start your journey!"
        onPress={() => console.log("Done!")}
        style={{ width: "84%", marginTop: 64 }}
      />
      <Button
        text="Reset"
        onPress={() => {
          dispatch(userSlice.actions.reset());
          history.replace("/");
        }}
        style={{
          width: "84%",
          marginTop: 64,
          backgroundColor: "transparent",
          color: "#fff",
        }}
      />
    </div>
  );
}
