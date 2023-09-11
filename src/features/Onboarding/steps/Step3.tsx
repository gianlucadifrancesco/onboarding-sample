import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { useState } from "react";

import Step from "../../../components/Step";
import Tile from "../../../components/Tile";

import { ReactComponent as Easy } from "../../../Resources/assets/Tiles/Easy.svg";
import { ReactComponent as Medium } from "../../../Resources/assets/Tiles/Medium.svg";
import { ReactComponent as Hard } from "../../../Resources/assets/Tiles/Hard.svg";
import { ReactComponent as Extreme } from "../../../Resources/assets/Tiles/Extreme.svg";
import Button from "../../../components/Button";
import { useUserState } from "../../../store/app.reducer";
import userSlice from "../../../store/slices/userSlice";

export default function Step3() {
  const user = useUserState();
  const [level, setLevel] = useState(user.level);

  const dispatch = useDispatch();
  const history = useHistory();

  const onNext = () => {
    dispatch(userSlice.actions.update({ level }));
    history.push(`/success`);
  };

  return (
    <Step>
      <h1>
        What's your
        <br />
        preferred
        <br />
        workout?
      </h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          margin: "36px -7px 0 -7px",
        }}
      >
        <Tile
          Icon={(props) => <Easy {...props} />}
          color="purple"
          title="Easy"
          p="All you need to stay healthy"
          focused={level === 1}
          onClick={() => setLevel(1)}
        />
        <Tile
          Icon={(props) => <Medium {...props} />}
          color="yellow"
          title="Medium"
          p="Not too easy, not too hard"
          focused={level === 2}
          onClick={() => setLevel(2)}
        />
        <Tile
          Icon={(props) => <Hard {...props} />}
          color="red"
          title="Hard"
          p="Pretty intense workout"
          focused={level === 3}
          onClick={() => setLevel(3)}
        />
        <Tile
          Icon={(props) => <Extreme {...props} />}
          color="black"
          title="Extreme"
          p="Challenge yourself!"
          focused={level === 4}
          onClick={() => setLevel(4)}
        />
      </div>
      <div style={{ width: "fit-content", marginLeft: "auto", marginTop: 60 }}>
        <Button text="Continue" onPress={onNext} isDark disabled={!level} />
      </div>
    </Step>
  );
}
