import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import PostComp from "./Components/PostComp";
import UserComp from "./Components/UserComp";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        {/* <PostComp/> */}
        <UserComp/>
      </Provider>
    </div>
  );
}

export default App;
