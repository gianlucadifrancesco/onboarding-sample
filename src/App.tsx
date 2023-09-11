import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";

import store from "./store/store";
import AppNav from "./App.nav";

import "./App.css";

export default function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <AppNav />
      </HashRouter>
    </Provider>
  );
}
