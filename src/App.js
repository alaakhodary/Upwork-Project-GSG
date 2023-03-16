import JobProvider from "./contexts/jobContext";
import Router from "./router";

function App() {
  return (
    <div className="App">
      <JobProvider>
        <Router />
      </JobProvider>
    </div>
  );
}

export default App;
