import { useDispatch } from "react-redux";
import { useHistory, useRouteMatch } from "react-router";

import Input from "../../../components/Input";
import Step from "../../../components/Step";
import Button from "../../../components/Button";
import { useUserState } from "../../../store/app.reducer";
import userSlice from "../../../store/slices/userSlice";

export default function Step2() {
  const user = useUserState();

  const dispatch = useDispatch();
  const { path } = useRouteMatch();
  const history = useHistory();

  const onNext = () => history.push(`${path}/step3`);

  return (
    <Step>
      <h1>
        What's,
        <br />
        your weight,
        <br />
        {user.name}?
      </h1>
      <Input
        type="number"
        value={`${user.weight || ""}`}
        setValue={(weight) =>
          dispatch(userSlice.actions.update({ weight: +weight || null }))
        }
      />
      <div style={{ width: "fit-content", marginLeft: "auto", marginTop: 60 }}>
        <Button
          text="Continue"
          onPress={onNext}
          isDark
          disabled={!user.weight}
        />
      </div>
    </Step>
  );
}
