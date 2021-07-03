import Markup from "./components/Markup";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div>
        <h2>Preview</h2>
        <Markup />
      </div>
    </div>
  );
}

export default App;
