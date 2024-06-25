import React, { useState } from "react";
import { ApolloClient } from "@apollo/client";
import {
  useCreateFlashCardMutation,
  useGetDecksQuery,
} from "../generated/graphql";

type FlashCardInputType = {
  front: string;
  back: string;
  deck: string;
  clues: string[];
  tags: string;
};

const defaultValues = {
  front: "",
  back: "",
  deck: "",
  clues: [],
  tags: "",
};

export const CreateFlashCard = () => {
  const { data } = useGetDecksQuery();

  const decks = data?.deckMany;

  const [flashCardInput, setFlashCardInput] =
    useState<FlashCardInputType>(defaultValues);

  const [createFlashCardMutation] = useCreateFlashCardMutation({
    refetchQueries: ["GetFlashCards"],
  });

  const handleSubmit = async () => {
    let tagsArrayToSubmit: string[] = [];
    if (flashCardInput?.tags?.length && flashCardInput?.tags?.length > 0) {
      tagsArrayToSubmit = parseTagsString(flashCardInput?.tags);
    }

    const recordToSubmit = {
      ...flashCardInput,
      tags: tagsArrayToSubmit,
    };

    await createFlashCardMutation({
      variables: { record: recordToSubmit },
    });
  };

  const parseTagsString = (string: string) => {
    const splitByHashArray = string.split("#").filter((item) => item != "");
    return splitByHashArray;
  };

  return (
    <div>
      <div>FlashCard Creation</div>
      <div className='flex flex-col gap-2'>
        <div>
          <div>Front</div>
          <input
            autoComplete='off'
            type='text'
            name='front'
            value={flashCardInput?.front}
            onChange={(event) => {
              const { name, value } = event.target;
              setFlashCardInput((prev) => ({ ...prev, [name]: value }));
            }}
          />
        </div>
        <div>
          <div>Back</div>
          <input
            autoComplete='off'
            type='text'
            name='back'
            value={flashCardInput?.back}
            onChange={(event) => {
              const { name, value } = event.target;
              setFlashCardInput((prev) => ({ ...prev, [name]: value }));
            }}
          />
        </div>
        <div>
          <div>Deck</div>
          <select
            name='deck'
            value={flashCardInput?.deck}
            onChange={(event) => {
              const { name, value } = event.target;
              setFlashCardInput((prev) => ({ ...prev, [name]: value }));
            }}
          >
            <option></option>
            {decks?.map((deck) => {
              return (
                <option value={deck._id} key={deck._id}>
                  {deck.name}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <div>Tags</div>
          <input
            autoComplete='off'
            type='text'
            name='tags'
            value={flashCardInput?.tags}
            onChange={(event) => {
              const { name, value } = event.target;
              setFlashCardInput((prev) => ({ ...prev, [name]: value }));
            }}
          />
        </div>
      </div>
      <button onClick={async () => handleSubmit()}>Submit</button>
    </div>
  );
};
