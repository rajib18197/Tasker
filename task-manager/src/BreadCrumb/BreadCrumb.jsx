import { Link, useLocation } from "react-router-dom";

export default function BreadCrumb() {
  const location = useLocation();
  console.log(location);

  const { pathname } = location;
  const links = pathname.split("/").filter(Boolean);
  console.log(links);

  return (
    <div>
      {links.length > 0 && <Link to={"/"}>Home </Link>}

      {links.map((link, i) => {
        const isLast = i === links.length - 1;

        return isLast ? (
          <span key={link}> / {link}</span>
        ) : (
          <Link key={link} to={`/${link}`}>
            / {link}
          </Link>
        );
      })}
    </div>
  );
}
