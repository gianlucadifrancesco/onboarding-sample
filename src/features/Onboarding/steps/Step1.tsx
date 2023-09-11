import { useHistory, useRouteMatch } from "react-router";
import { useDispatch } from "react-redux";

import Input from "../../../components/Input";
import Step from "../../../components/Step";
import Button from "../../../components/Button";
import userSlice from "../../../store/slices/userSlice";
import { useUserState } from "../../../store/app.reducer";

export default function Step1() {
  const user = useUserState();

  const dispatch = useDispatch();
  const { path } = useRouteMatch();
  const history = useHistory();

  const onNext = () => history.push(`${path}/step2`);

  return (
    <Step>
      <h1>
        Hi there,
        <br />
        how should
        <br />
        we call you?
      </h1>
      <Input
        value={user.name || ""}
        setValue={(name) =>
          dispatch(userSlice.actions.update({ name: name.trim() }))
        }
        placeholder="Your name"
      />
      <div style={{ width: "fit-content", marginLeft: "auto", marginTop: 60 }}>
        <Button text="Continue" onPress={onNext} isDark disabled={!user.name} />
      </div>
    </Step>
  );
}
