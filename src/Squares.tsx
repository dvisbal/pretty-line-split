import Square from "./Square";
import { splitLines } from "./split";

interface SquaresProps {
  text?: string;
}

export default function Squares({ text }: SquaresProps) {
  const squares: JSX.Element[] = [];

  const MAX_LINES_PER_SQUARE = 5;
  if (text) {
    const lines = splitLines(text);
    for (let i = 0; i < lines.length; i += MAX_LINES_PER_SQUARE) {
      squares.push(<Square lines={lines.slice(i, i + MAX_LINES_PER_SQUARE)} />);
    }
  }

  return <div>{squares}</div>;
}
