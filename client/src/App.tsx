import { Route, Switch } from "wouter";
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
      <Switch>
        <Route path='/'>
          <ShowDecks />
        </Route>
        <Route path='/createDeck'>
          <CreateDeck />
        </Route>
        {/* <CreateFlashCard />
          <ShowFlashCards />
          <hr />*/}
        {/* <hr />
          <CreateWord />
          <ShowWords /> */}
      </Switch>
    </MainContainer>
  );
};

export default App;
