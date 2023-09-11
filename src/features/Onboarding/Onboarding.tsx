import { useEffect, useRef } from "react";
import { Route, useRouteMatch, useHistory } from "react-router-dom";
import ReactSwipeableRoutes from "react-swipeable-routes";

import Header from "../../components/Header";
import { useUserState } from "../../store/app.reducer";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";

import "./Onboarding.css";

export default function Onboarding() {
  const user = useUserState();
  const hasMountedRef = useRef(false);

  const { path } = useRouteMatch();
  const history = useHistory();

  useEffect(() => {
    if (hasMountedRef.current) return;

    if (user.name && user.weight) history.replace(`${path}/step3`);
    else if (user.name) history.replace(`${path}/step2`);
    else history.replace(`${path}/step1`);

    hasMountedRef.current = true;
  }, [history, path, user.name, user.weight]);

  return (
    <div>
      <Header />
      <div
        className="Onboarding"
        style={{
          backgroundColor: "#fff",
          height: "100vh",
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          paddingTop: 30,
        }}
      >
        <ReactSwipeableRoutes disabled>
          <Route path={`${path}/step1`}>
            <Step1 />
          </Route>
          <Route path={`${path}/step2`}>
            <Step2 />
          </Route>
          <Route path={`${path}/step3`}>
            <Step3 />
          </Route>
        </ReactSwipeableRoutes>
      </div>
    </div>
  );
}
