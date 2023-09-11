import { useEffect, useRef } from "react";
import {
  Switch,
  Route,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";
import Onboarding from "./features/Onboarding/Onboarding";
import Success from "./features/Success/Success";
import { useUserState } from "./store/app.reducer";
import StatusBar from "./Resources/assets/StatusBar.svg";

import "./App.css";

export default function AppNav() {
  const { name, weight, level } = useUserState();
  const hasMountedRef = useRef(false);

  const history = useHistory();
  const { pathname } = useLocation();

  useEffect(() => {
    if (hasMountedRef.current) return;

    if (name && weight && level) history.replace("/success");
    else if (!pathname.startsWith("/onboarding"))
      history.replace("/onboarding");

    hasMountedRef.current = true;
  }, [history, level, name, pathname, weight]);

  return (
    <div
      style={{
        backgroundColor: "var(--purple)",
        width: "100%",
        maxWidth: 375,
        height: "100%",
        maxHeight: 812,
        position: "fixed",
        left: "50%",
        top: "50%",
        transform: "translateX(-50%) translateY(-50%)",
        borderRadius: 38.5,
        overflow: "hidden",
        boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
      }}
    >
      <img
        src={StatusBar}
        alt="StatusBar"
        width="100%"
        style={{ position: "absolute", top: 0, left: 0 }}
      />
      <Switch>
        <Route path="/onboarding">
          <Onboarding />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
        <Route>
          <Redirect to="/onboarding" />
        </Route>
      </Switch>
    </div>
  );
}
