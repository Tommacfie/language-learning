import { Route, Switch } from "wouter";
import "./App.css";
import { CreateDeck } from "./components/deck/CreateDeck";
import { CreateFlashCard } from "./components/CreateFlashCard";
import { CreateWord } from "./components/CreateWord";
import { ShowDecks } from "./components/deck/ShowDecks";
import { ShowFlashCards } from "./components/flashCard/ShowFlashCards";
import { ShowWords } from "./components/ShowWords";
import MainContainer from "./containers/MainContainer";

export const App = () => {
  return (
    <MainContainer>
      <Switch>
        <Route path='/'>
          <ShowDecks />
        </Route>
        <Route path='/deck' nest>
          <Route path='/view/:id'>
            <ShowFlashCards />
          </Route>
          <Route path='/create'>
            <CreateDeck />
          </Route>
          <Route path='/edit/:id'></Route>
          <Route path='/flashCard' nest>
            <Route path='/create'></Route>
            <Route path='/edit'></Route>
          </Route>
        </Route>
      </Switch>
    </MainContainer>
  );
};

export default App;
