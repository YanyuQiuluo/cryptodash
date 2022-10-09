import Settings from '../Settings';
import './App.css';
import AppLayout from "./AppLayout";
import AppBar from "./AddBar";
import {AppProvider} from "./AppProvider";


function App() {
  return (
      <AppLayout>
          <AppProvider>
            <AppBar/>
            <Settings/>
          </AppProvider>
      </AppLayout>
  );
}

export default App;
