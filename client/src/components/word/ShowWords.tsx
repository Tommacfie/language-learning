import React from "react";
import { useGetWordsQuery } from "../generated/graphql";

export const ShowWords = () => {
  const { data } = useGetWordsQuery();

  const words = data?.wordMany;
  return (
    <>
      <ul>
        {words?.map((word) => {
          return <li>{word.english}</li>;
        })}
      </ul>
    </>
  );
};
