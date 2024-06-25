import React from "react";
import { useGetDecksQuery } from "../generated/graphql";

export const ShowDecks = () => {
  const { data } = useGetDecksQuery();

  const decks = data?.deckMany;
  return (
    <>
      <ul>
        {decks?.map((deck) => {
          return <li>{deck.name}</li>;
        })}
      </ul>
    </>
  );
};
