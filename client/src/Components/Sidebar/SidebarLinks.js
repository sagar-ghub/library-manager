import React from "react";

export default function SidebarLinks() {
  return (
    <li>
      <a href="#" className="active">
        <span className="icon">
          <FontAwesomeIcon icon={faHome} />
        </span>
        <span className="item">Home</span>
      </a>
    </li>
  );
}
