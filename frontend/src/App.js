import Allroutes from "./allRoutes/Allroutes";

import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Navbar/Sidebar";

function App() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Allroutes />
    </div>
  );
}

export default App;
