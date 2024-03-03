import { useState } from 'react';
import './App.css';
import { useCreateWordMutation } from './generated/graphql';

type WordInputType = {
  english?: string;
  polish?: string;
  englishDescription?: string;
  polishDescription?: string;
  tags?: string;
};

export const App = () => {
  const [wordInput, setWordInput] = useState<WordInputType>();

  const [createWordMutation] = useCreateWordMutation();

  const handleSubmit = async () => {
    let tagsArrayToSubmit: string[] = [];
    if (wordInput?.tags?.length && wordInput?.tags?.length > 0) {
      tagsArrayToSubmit = parseTagsString(wordInput?.tags);
    }

    const recordToSubmit = { ...wordInput, tags: tagsArrayToSubmit };

    await createWordMutation({
      variables: { record: recordToSubmit },
    });
  };

  const parseTagsString = (string: string) => {
    const splitByHashArray = string.split('#').filter((item) => item != '');
    return splitByHashArray;
  };

  return (
    <div>
      <div>Word Creation</div>
      <div className='flex flex-col gap-2'>
        <div>
          <div>English</div>
          <input
            type='text'
            name='english'
            value={wordInput?.english}
            onChange={(event) => {
              const { name, value } = event.target;
              setWordInput((prev) => ({ ...prev, [name]: value }));
            }}
          />
        </div>
        <div>
          <div>Polish</div>
          <input
            type='text'
            name='polish'
            value={wordInput?.polish}
            onChange={(event) => {
              const { name, value } = event.target;
              setWordInput((prev) => ({ ...prev, [name]: value }));
            }}
          />
        </div>
        <div>
          <div>English description</div>
          <input
            type='text'
            name='englishDescription'
            value={wordInput?.englishDescription}
            onChange={(event) => {
              const { name, value } = event.target;
              setWordInput((prev) => ({ ...prev, [name]: value }));
            }}
          />
        </div>
        <div>
          <div>Polish description</div>
          <input
            type='text'
            name='polishDescription'
            value={wordInput?.polishDescription}
            onChange={(event) => {
              const { name, value } = event.target;
              setWordInput((prev) => ({ ...prev, [name]: value }));
            }}
          />
        </div>
        <div>
          <div>Tags</div>
          <input
            type='text'
            name='tags'
            value={wordInput?.tags}
            onChange={(event) => {
              const { name, value } = event.target;
              setWordInput((prev) => ({ ...prev, [name]: value }));
            }}
          />
        </div>
      </div>
      <button onClick={async () => handleSubmit()}>Submit</button>
    </div>
  );
};

export default App;
