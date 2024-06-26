import React from "react";
import {
  useGetDeckByIdQuery,
  useGetFlashCardsQuery,
} from "../../generated/graphql";
import PageTitle from "../display/PageTitle";
import { useParams } from "wouter";

export const ShowFlashCards = () => {
  const params = useParams();
  const deckID = params.id;
  console.log(params);

  const { data } = useGetDeckByIdQuery({ variables: { id: deckID } });

  const deckName = data?.deck?.name;

  const { data: flashCardQuery } = useGetFlashCardsQuery();

  const flashCards = flashCardQuery?.flashCardMany;

  return (
    <>
      <PageTitle text={deckName || "Flash Cards"} />
      <ul>
        {flashCards?.map((flashCard) => {
          return <li>{flashCard.front}</li>;
        })}
      </ul>
    </>
  );
};
