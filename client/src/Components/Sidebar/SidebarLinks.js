import React from "react";

export default function SidebarLinks() {
  return (
    <li>
      <a href="#" class="active">
        <span class="icon">
          <FontAwesomeIcon icon={faHome} />
        </span>
        <span class="item">Home</span>
      </a>
    </li>
  );
}
