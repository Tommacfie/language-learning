import React from "react";
import { useGetFlashCardsQuery } from "../generated/graphql";

export const ShowFlashCards = () => {
  const { data } = useGetFlashCardsQuery();

  const flashCards = data?.flashCardMany;
  return (
    <>
      <ul>
        {flashCards?.map((flashCard) => {
          return <li>{flashCard.front}</li>;
        })}
      </ul>
    </>
  );
};
