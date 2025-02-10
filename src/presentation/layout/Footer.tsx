import { Link } from "react-router";
export default function Footer() {
  return (
    <footer className="flex justify-between items-center border border-light-separator border-dark-separator">
      <p className="text-light-muted dark:text-dark-muted">ColoredStrategies 2019</p>
      <ul className="text-light-bluenavy-100 dark:text-dark-bluenavy-100 hover:text-light-bluenavy-100/50 dark:hover:text-dark-bluenavy-100/50">
        <li>
          <Link to="">Review</Link>
        </li>
        <li>
          <Link to="">Purchase</Link>
        </li>
        <li>
          <Link to="">Docs</Link>
        </li>
      </ul>
    </footer>
  );
}
