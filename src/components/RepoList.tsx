interface RepoListProps {
  data: string[];
}

const RepoList: React.FC<RepoListProps> = ({ data }) => {
  const repos = data.map((item, index) => {
    return <li key={index}>{item}</li>;
  });

  return <ul>{repos}</ul>;
};

export default RepoList;
