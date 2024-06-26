import { useState } from "react";
import { useCreateDeckMutation, useGetDecksQuery } from "../generated/graphql";

type DeckInputType = {
  name: string;
  tags: string;
};

const defaultValues = {
  name: "",
  tags: "",
};

export const CreateDeck = () => {
  const [deckInput, setDeckInput] = useState<DeckInputType>(defaultValues);

  const [createDeckMutation] = useCreateDeckMutation({
    refetchQueries: ["GetDecks"],
  });

  const handleSubmit = async () => {
    let tagsArrayToSubmit: string[] = [];
    if (deckInput?.tags?.length && deckInput?.tags?.length > 0) {
      tagsArrayToSubmit = parseTagsString(deckInput?.tags);
    }

    const recordToSubmit = {
      ...deckInput,
      tags: tagsArrayToSubmit,
    };

    await createDeckMutation({
      variables: { record: { ...recordToSubmit, reversed: false } },
    });
  };

  const parseTagsString = (string: string) => {
    const splitByHashArray = string.split("#").filter((item) => item != "");
    return splitByHashArray;
  };

  return (
    <div>
      <div>Deck Creation</div>
      <div className='flex flex-col gap-2'>
        <div>
          <div>Name</div>
          <input
            autoComplete='off'
            type='text'
            name='name'
            value={deckInput?.name}
            onChange={(event) => {
              const { name, value } = event.target;
              setDeckInput((prev) => ({ ...prev, [name]: value }));
            }}
          />
        </div>
        <div>
          <div>Tags</div>
          <input
            autoComplete='off'
            type='text'
            name='tags'
            value={deckInput?.tags}
            onChange={(event) => {
              const { name, value } = event.target;
              setDeckInput((prev) => ({ ...prev, [name]: value }));
            }}
          />
        </div>
      </div>
      <button onClick={async () => handleSubmit()}>Submit</button>
    </div>
  );
};
