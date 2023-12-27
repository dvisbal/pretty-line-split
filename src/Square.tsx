import { useState } from "react";
import { split } from "./split";

interface SquareProps {
  lines?: string[];
}

export default function ({ lines }: SquareProps) {
  // if (text) {
  //   let first,
  //     rest = text;
  //   do {
  //     ({ first, rest } = split(rest));
  //     rows.push(<p>{first}</p>);
  //   } while (rest.length > 0);
  // }
  const elements = lines?.map((v) => <p>{v}</p>);

  return <div className="square">{elements}</div>;
}
