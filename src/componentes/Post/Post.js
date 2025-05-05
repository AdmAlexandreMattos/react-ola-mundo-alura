import { useParams } from "react-router-dom";

export const Post = () => {
  const parametros = useParams();

  return <p>teste {parametros.id}</p>;
};
