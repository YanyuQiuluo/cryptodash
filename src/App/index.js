import Settings from '../Settings';
import './App.css';
import AppLayout from "./AppLayout";
import AppBar from "./AddBar";
import {AppProvider} from "./AppProvider";
import Content from "../Shared/Content";


function App() {
  return (
      <AppLayout>
          <AppProvider>
            <AppBar/>
              <Content>
                  <Settings/>
              </Content>
          </AppProvider>
      </AppLayout>
  );
}

export default App;
