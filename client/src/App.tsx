import "./App.css";
import { CreateDeck } from "./components/CreateDeck";
import { CreateFlashCard } from "./components/CreateFlashCard";
import { CreateWord } from "./components/CreateWord";
import { ShowDecks } from "./components/ShowDecks";
import { ShowFlashCards } from "./components/ShowFlashCards";
import { ShowWords } from "./components/ShowWords";
import MainContainer from "./containers/MainContainer";

export const App = () => {
  return (
    <MainContainer>
      {/* <CreateFlashCard />
        <ShowFlashCards />
        <hr />*/}
      <CreateDeck />
      <ShowDecks />
      {/* <hr />
        <CreateWord />
        <ShowWords /> */}
    </MainContainer>
  );
};

export default App;
