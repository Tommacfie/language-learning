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
      <ul>
        {decks?.map((deck) => {
          return (
            <li>
              <div>{deck.name}</div>
              <input
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
            </li>
          );
        })}
      </ul>
    </div>
  );
};
