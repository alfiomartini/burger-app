import "./styles.css";

interface Props {
  name: string;
}

export function Badge({ name }: Props) {
  return <span className="badge">{name}</span>;
}
