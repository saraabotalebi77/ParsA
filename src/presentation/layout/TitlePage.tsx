import { Link, useLocation } from "react-router";

export default function TitlePage() {
    const {pathname} = useLocation();
  return (
    <div className="flex gap-3 items-center border border-light-separator dark:border-dark-separator">
      <h2>{pathname.replaceAll("-"," ")}</h2>
      <ul className="flex items-center gap-3">
        <li>
          <Link to="">Home</Link>
        </li>
        |
        <li>
          <Link to="">Library</Link>
        </li>
        |
        <li>
          <Link to="">Data</Link>
        </li>
      </ul>
    </div>
  );
}
