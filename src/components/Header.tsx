import { useLocation, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";

export default function Header() {
  const { pathname } = useLocation();
  const { path } = useRouteMatch();

  const currStep = +pathname.substr(-1);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 65,
        marginBottom: 30,
      }}
    >
      <div style={{ flex: 1 }}>
        {currStep > 1 && (
          <Link to={`${path}/step${currStep - 1}`}>
            <b
              style={{
                color: "#fff",
                marginLeft: 20,
                padding: 10,
                fontSize: 15,
              }}
            >
              Back
            </b>
          </Link>
        )}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {new Array(3).fill(undefined).map((_, i) => {
          const isDisabled = i > currStep - 1;
          return (
            <Link
              key={i}
              to={`${path}/step${i + 1}`}
              style={{
                margin: 5,
                ...(isDisabled && { pointerEvents: "none" }),
              }}
            >
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  backgroundColor: "#fff",
                  opacity: isDisabled ? 0.4 : 1,
                }}
              />
            </Link>
          );
        })}
      </div>
      <div style={{ flex: 1 }} />
    </div>
  );
}
