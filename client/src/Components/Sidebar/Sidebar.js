import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBook, faHome } from "@fortawesome/free-solid-svg-icons";
import { Link, withRouter } from "react-router-dom";
function Sidebar({ sidebarLink, setSidebarLink }) {
  const data = [
    {
      icon: faHome,
      item: "Home",
      link: "/",
    },
    {
      icon: faSearch,
      item: "Search Books",
      link: "/search",
    },
    {
      icon: faBook,
      item: "Add Books",
      link: "/add",
    },
  ];
  return (
    <div id="sidebar">
      <div className="sidebar__header">
        <h3>Books Inventory !</h3>
      </div>
      <div>
        <ul>
          {data.map((item, key) => (
            <Link to={item.link} key={key}>
              <li onClick={() => setSidebarLink(item.item)}>
                <a
                  href="#"
                  className={item.item == sidebarLink ? "active" : ""}
                >
                  <span className="icon">
                    <FontAwesomeIcon icon={item.icon} />
                  </span>
                  <span className="item">{item.item}</span>
                </a>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default withRouter(Sidebar);
