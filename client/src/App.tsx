import "./App.css";
import { CreateDeck } from "./components/CreateDeck";
import { CreateFlashCard } from "./components/CreateFlashCard";
import { CreateWord } from "./components/CreateWord";
import { ShowDecks } from "./components/ShowDecks";
import { ShowFlashCards } from "./components/ShowFlashCards";
import { ShowWords } from "./components/ShowWords";

export const App = () => {
  return (
    <>
      <CreateFlashCard />
      <ShowFlashCards />
      <hr />
      <CreateDeck />
      <ShowDecks />
      <hr />
      <CreateWord />
      <ShowWords />
    </>
  );
};

export default App;
