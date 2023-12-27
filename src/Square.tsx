interface SquareProps {
  lines?: string[];
}

export default function Square({ lines }: SquareProps) {
  const elements = lines?.map((v, i) => <p key={i}>{v}</p>);

  return <div className="square">{elements}</div>;
}
