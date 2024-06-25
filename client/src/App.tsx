import "./App.css";
import { CreateFlashCard } from "./components/CreateFlashCard";
import { CreateWord } from "./components/CreateWord";
import { ShowWords } from "./components/ShowWords";

export const App = () => {
  return (
    <>
      {/* <CreateWord /> */}
      <CreateFlashCard />
      <ShowWords />
    </>
  );
};

export default App;
