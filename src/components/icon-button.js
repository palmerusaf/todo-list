import dom from "jsx-render";

export default function IconButton(props) {
  const { type } = props;

  return (
    <button className={`material-icons-outlined button button__${type}`}>
      {type}
    </button>
  );
}
