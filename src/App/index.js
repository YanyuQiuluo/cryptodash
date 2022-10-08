import WelcomeMessage from './WelcomeMessage';
import './App.css';
import AppLayout from "./AppLayout";
import AppBar from "./AddBar";


function App() {
  return (
      <AppLayout>
        <AppBar/>
    <WelcomeMessage/>
      </AppLayout>
  );
}

export default App;
