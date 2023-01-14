import logo from "./logo.svg";
import "./App.css";
import AppRouting from "./configuration/appRouting/appRouting";
import { Provider } from "react-redux";
import store from "./configuration/Redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <AppRouting />
      </Provider>
    </>
  );
}

export default App;
