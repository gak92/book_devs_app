import { Provider } from "react-redux";
import "./App.css";
import store from "./redux/store";
import DisplayAllDevs from "./components/devs/displayAllDevs";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <DisplayAllDevs />
      </div>
    </Provider>
  );
}

export default App;
