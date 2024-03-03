import './App.css';
import { useGetWordManyQuery } from './generated/graphql';

export const App = () => {
  const { data } = useGetWordManyQuery();

  console.log(data);
  return (
    <div>
      <div>Word Creation</div>
    </div>
  );
};

export default App;
