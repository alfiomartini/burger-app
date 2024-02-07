import { Burger } from "../../interfaces";

interface Props {
  burgers: Burger[];
}

export function Burgers({ burgers }: Props) {
  console.log(burgers);

  return <h3>Burgers</h3>;
}
