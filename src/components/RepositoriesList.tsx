import { useState } from "react";
import { useSelector } from "react-redux";
import { useActions } from "../hooks/useActions";

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState("");
  const { searchRepositories } = useActions();
  const { loading, error, data } = useSelector((state: any) => state);

  const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchRepositories(term);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <input value={term} onChange={(e) => setTerm(e.target.value)} />
      <button>Search</button>
    </form>
  );
};

export default RepositoriesList;
