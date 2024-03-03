import React, { useState } from 'react';
import {
  EnumWordWordGender,
  EnumWordWordType,
  useCreateWordMutation,
} from '../generated/graphql';

type WordInputType = {
  english?: string;
  polish?: string;
  englishDescription?: string;
  polishDescription?: string;
  tags?: string;
  wordType?: EnumWordWordType;
  wordGender?: EnumWordWordGender;
};

export const CreateWord = () => {
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

  const wordClasses = Object.values(EnumWordWordType);
  const wordGenders = Object.values(EnumWordWordGender);

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
        <div>
          <div>Word Type</div>
          <select
            name='wordType'
            value={wordInput?.wordType}
            onChange={(event) => {
              const { name, value } = event.target;
              setWordInput((prev) => ({ ...prev, [name]: value }));
            }}
          >
            <option></option>
            {wordClasses.map((wordClass) => {
              return <option value={wordClass}>{wordClass}</option>;
            })}
          </select>
        </div>
        <div>
          <div>Word Gender</div>
          <select
            name='wordGender'
            value={wordInput?.wordGender}
            onChange={(event) => {
              const { name, value } = event.target;
              setWordInput((prev) => ({ ...prev, [name]: value }));
            }}
          >
            <option></option>
            {wordGenders.map((wordGender) => {
              return <option value={wordGender}>{wordGender}</option>;
            })}
          </select>
        </div>
      </div>
      <button onClick={async () => handleSubmit()}>Submit</button>
    </div>
  );
};
