import Square from "./Square";
import { useState } from "react";
import { splitLines } from "./split";

interface SquaresProps {
  text?: string;
}

export default function ({ text }: SquaresProps) {
  const squares: any[] = [];
  // const MAX_CHARACTERS_PER_SQUARE = 50;
  // if (text) {
  //   console.log("test", splitLines(text));
  //   for (var i = 0; i * MAX_CHARACTERS_PER_SQUARE < text?.length; i++) {
  //     const squareText: string = text.slice(
  //       i * MAX_CHARACTERS_PER_SQUARE,
  //       i * MAX_CHARACTERS_PER_SQUARE + MAX_CHARACTERS_PER_SQUARE
  //     );
  //     squares.push(<Square text={squareText} />);
  //   }
  // }

  const MAX_LINES_PER_SQUARE = 5;
  if (text) {
    const lines = splitLines(text);
    for (let i = 0; i < lines.length; i += MAX_LINES_PER_SQUARE) {
      squares.push(<Square lines={lines.slice(i, i + MAX_LINES_PER_SQUARE)} />);
    }
  }

  return <div>{squares}</div>;
}
