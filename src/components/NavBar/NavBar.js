import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import Link from "@material-ui/core/Link";
import Zoom from "@material-ui/core/Zoom";
import Tooltip from "@material-ui/core/Tooltip";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav class="navbar navbar-container fixed-top navbar-expand-lg navbar-light transparent">
     
        <div class="navbar-brand name" >
          Ultras Cave
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-label="Toggle navigation"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <MenuIcon />
        </button>
        <div>
          <Tooltip
            title={
              <div style={{ fontSize: "1rem", padding: ".5rem" }}>
                Mira mi perfil :)
              </div>
            }
            arrow
            TransitionComponent={Zoom}
            class="linkSpace linkColor"
          >
            <Link
              color="inherit"
              href="https://github.com/EmanuelCarrillo"
              target="_blank"
            >
              <GitHubIcon />
            </Link>
          </Tooltip>
          <Tooltip
            title={
              <div style={{ fontSize: "1rem", padding: ".5rem" }}>
                Escribeme si es necesario
              </div>
            }
            arrow
            TransitionComponent={Zoom}
          >
            <Link
              color="inherit"
              href="https://twitter.com/Carraxdax"
              target="_blank"
              class="linkSpace linkColor"
            >
              <TwitterIcon />
            </Link>
          </Tooltip>
        </div>

       
        <div class="collapse navbar-collapse drop nav-item" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item nav-center linkSpace linkColor">
              <NavLink
                className="nav-link underline"
                activeClassName="activeNav"
                to="/home"
              >
                Home
              </NavLink>
            </li>

           
            <li class="nav-item nav-center linkSpace linkColor">
              <NavLink
                className="nav-link underline aboutLink"
                activeClassName="activeNav"
                to="/about"
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
