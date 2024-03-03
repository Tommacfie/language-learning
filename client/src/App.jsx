import { useState } from 'react';
import './App.css';
import { useCreateWordMutation } from './generated/graphql';

export const App = () => {
  const [wordInput, setWordInput] = useState();

  const [createWordMutation] = useCreateWordMutation();

  const handleSubmit = async () => {
    await createWordMutation({
      variables: { record: wordInput },
    });
  };

  return (
    <div>
      <div>Word Creation</div>
      <input
        type='text'
        name='word'
        onChange={(event) => {
          const { name, value } = event.target;
          setWordInput((prev) => ({ ...prev, [name]: value }));
        }}
      />
      <input
        type='text'
        name='englishDescription'
        onChange={(event) => {
          const { name, value } = event.target;
          setWordInput((prev) => ({ ...prev, [name]: value }));
        }}
      />
      <input
        type='text'
        name='polishDescription'
        onChange={(event) => {
          const { name, value } = event.target;
          setWordInput((prev) => ({ ...prev, [name]: value }));
        }}
      />
      <button onClick={async () => handleSubmit()}>Submit</button>
    </div>
  );
};

export default App;
