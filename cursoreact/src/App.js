import './App.css';
import FirstComponents from './components/FirstComponents';
import AnotherComponent from './components/AnotherComponent';
import Images from './components/Images';
import Hooks from './components/Hooks';
import List from './components/List';
import RenderCond from './components/RenderCond';
import Fragments from './components/Fragments';
import Container from './components/Container';
function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <FirstComponents/>
      <AnotherComponent/>
      <Images/>
      <Hooks/>
      <List />
      <RenderCond x={10} y={10} />
      <Fragments />
      <Container>
        <h1>Este é filho container</h1>
      </Container>
    </div>
  );
}

export default App;
