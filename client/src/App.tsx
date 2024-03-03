import './App.css';
import { CreateWord } from './components/CreateWord';
import { ShowWords } from './components/ShowWords';

export const App = () => {
  return (
    <>
      <CreateWord />
      <ShowWords />
    </>
  );
};

export default App;
