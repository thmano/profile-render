import "./App.css";
import ProfileProvider, { useProfile } from "./context";
import Menu from "./Menu";

const App = () => {
  return (
    <div className="App">
      <ProfileProvider>
        <Menu />
      </ProfileProvider>
    </div>
  );
};

export default App;
