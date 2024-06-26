import React from "react";
import { useGetDecksQuery, useUpdateDeckMutation } from "../generated/graphql";

export const ShowDecks = () => {
  const { data } = useGetDecksQuery();

  const [updateDeck] = useUpdateDeckMutation({
    refetchQueries: ["GetDecks"],
  });

  const decks = data?.deckMany;

  return (
    <div>
      <div className='h-[10vh] flex items-center justify-center'>Decks</div>
      <hr />
      <ul className='gap-2'>
        {decks?.map((deck) => {
          return (
            <li className='flex justify-center gap-2 p-2 my-2 border rounded-md'>
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
                <div>view</div>
                <div>edit</div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
