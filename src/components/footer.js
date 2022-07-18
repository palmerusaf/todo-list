import dom from "jsx-render";

function Footer(props) {
  return (
    <footer className="footer">
      <a
        className="footer__link"
        href="https://github.com/palmerusaf/todo-list"
      >
        GitHub Repo
      </a>
      <img
        className="footer__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
        alt="git hub logo"
      />
    </footer>
  );
}

export default Footer;
