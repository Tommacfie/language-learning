import React from "react";
import {
  useGetDecksQuery,
  useUpdateDeckMutation,
} from "../../generated/graphql";
import { Link } from "wouter";
import PageTitle from "../display/PageTitle";

export const ShowDecks = () => {
  const { data } = useGetDecksQuery();

  const [updateDeck] = useUpdateDeckMutation({
    refetchQueries: ["GetDecks"],
  });

  const decks = data?.deckMany;

  return (
    <div>
      <PageTitle text='Decks' />
      <ul className='gap-2'>
        {decks?.map((deck) => {
          return (
            <li
              className='flex justify-center gap-2 p-2 my-2 border rounded-md'
              key={deck._id}
            >
              <div className='flex justify-center items-center'>
                {deck.name}
              </div>
              <div className='flex gap-1'>
                <input
                  name='reversed'
                  id='reversed'
                  type='checkbox'
                  checked={deck?.reversed}
                  onChange={async () =>
                    await updateDeck({
                      variables: {
                        id: deck._id,
                        record: { reversed: !deck.reversed },
                      },
                    })
                  }
                />
                <label
                  htmlFor='reversed'
                  className='flex justify-center items-center'
                >
                  reversed
                </label>
              </div>
              <div className='ml-auto flex flex-col'>
                <Link href={`/deck/view/${deck._id}`}>view</Link>
                <Link href={`/deck/edit/${deck._id}`}>edit</Link>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
