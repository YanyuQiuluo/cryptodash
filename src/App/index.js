import WelcomeMessage from './WelcomeMessage';
import './App.css';
import AppLayout from "./AppLayout";
import AppBar from "./AddBar";
import {AppProvider} from "./AppProvider";


function App() {
  return (
      <AppLayout>
          <AppProvider>
            <AppBar/>
            <WelcomeMessage/>
          </AppProvider>
      </AppLayout>
  );
}

export default App;
