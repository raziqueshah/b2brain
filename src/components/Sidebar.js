import React, { useState } from "react";
import "./Sidebar.css";
import home from "../images/home.png";
import logo from "../images/B2Brain.png";
import star from "../images/star.png";
import user from "../images/user.png";
import building from "../images/building.png";
import chevron from "../images/chevron-down.png";
import cog from "../images/cog.png";
import link from "../images/link.png";
import users from "../images/users.png";
import comments from "../images/comments-alt.png";
import chevronup from '../images/chevron-up.png';

const Sidebar = () => {
  const [toggle, setToggle] = useState(true);
  const [switchs, setSwitch] = useState(true);

  return (
    <div className="sidebar">
      <img src={logo} className="logo" alt="logo" />
      <div className="company">B2Brain</div>
      <img src={home} className="home-logo" alt="homelogo" />
      <div className="dashboard">Dashboard</div>
      <img src={star} className="star" alt="star" />
      <div className="intel">Intels</div>
      <div className="notification">
        <div className="noti-title">4 unread</div>
      </div>
      <img src={user} className="user" alt="user" />
      <div className="leads">Leads</div>
      <div className="notification2">
        <div className="noti-title2">4 unseen</div>
      </div>
      
      <img src={building} className="building" alt="building" />
      <div className="account">Accounts</div>
      { toggle ? (<img
        src={chevron}
        className="chevron"
        alt="chevron"
        onClick={() => setToggle(!toggle)}
      />) : <img
      src={chevronup}
      className="chevron"
      alt="chevron-up"
      onClick={() => setToggle(!toggle)}
    />}
      {toggle ? (
        <div>
          <div className="v1"></div>
          <div className="account-list">
            Manage all <br />
            Tracknew accounts <br />
            Bulk import
          </div>
        </div>
      ) : (
        <div></div>
      )}
      
      <div className={toggle ? "" : "collapse"}>
      <img src={cog} className="cog" alt="cog" />
      { switchs ? (<img
        src={chevron}
        alt="chevron-down"
        className="chevron-down"
        onClick={() => setSwitch(!switchs)}
      />) : <img
      src={chevronup}
      alt="chevron-up"
      className="chevron-down"
      onClick={() => setSwitch(!switchs)}
    />}
      <div className="preference">Preferences</div>
      {switchs ? (
        <div>
          <div className="v2"></div>
          <div className="preference-list">
            Product Focus <br />
            IntelPreferences Lead Persona
          </div>
        </div>
      ) : (
        <div></div>
      )}
      
      <div className={ switchs ? "" : "collapse"}>
      <img src={link} alt="link" className="link" />
      <div className="integration">Integrations</div>
      <img src={users} alt="users" className="users" />
      <div className="team">Team</div>
      <img src={comments} alt="" className="comments" />
      <div className="help">Help/Support</div>
      </div>
      </div>
    </div>
  );
};

export default Sidebar;
