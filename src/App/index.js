import WelcomeMessage from './WelcomeMessage';
import './App.css';
//import styled,{css} from 'styled-components';

// const  MyButton= styled.div`
//   color: green;
//   ${props => props.primary && css`
//     color: palevioletred;
//   `}
// `
//
// const TomatoButton = styled(MyButton)`
//   color: tomato;
//   border-color: tomato;
// `;


function App() {
  return (
      <div>
    <WelcomeMessage/>
      </div>
  );
}

export default App;
