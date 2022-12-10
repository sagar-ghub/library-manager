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
        <h3>Hello !</h3>
      </div>
      <div>
        <ul>
          {data.map((item, key) => (
            <Link to={item.link} key={key}>
              <li onClick={() => setSidebarLink(item.item)}>
                <a href="#" class={item.item == sidebarLink ? "active" : ""}>
                  <span className="icon">
                    <FontAwesomeIcon icon={item.icon} />
                  </span>
                  <span class="item">{item.item}</span>
                </a>
              </li>
            </Link>
          ))}
          {/* <li>
            <a href="#" class="active">
              <span class="icon">
                <FontAwesomeIcon icon={faHome} />
              </span>
              <span class="item">Home</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="icon">
                <FontAwesomeIcon icon={faSearch} />
              </span>
              <span class="item">Search Books</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="icon">
                <FontAwesomeIcon icon={faBook} />
              </span>
              <span class="item">Add Books</span>
            </a>
          </li> */}

          {/* <li>
            <a href="#">
              <span class="icon">
                <i class="fas fa-tachometer-alt"></i>
              </span>
              <span class="item">Perfomance</span>
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export default withRouter(Sidebar);
