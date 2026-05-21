import React from 'react'
import { NavLink } from 'react-router-dom';
import styles  from "./sidebar.module.css"

 function Sidebar({hasUsersDraft}) {
    const links = [
        {icon: "fa-chart-line", title: "status", path: "/status"},
        {icon: "fa-users", title: "users management", path: "/users"},
        {icon: "fa-building", title: "projects management", path: "/projects"},
        {icon: "fa-code", title: "developers management", path: "developers"},
        {icon: "fa-globe", title: "cms"},
        {icon: "fa-message", title: "live chat"},
    ]
  return (
    
      <aside className={`min-vh-100 py-4 ${styles.sidebar}`} >  
      {/* title */}
        <div className="px-5 fs-4 mb-3 fw-semibold">dashboard</div>
        {/* nav links */}
        <nav>
            {/* link item */}
           {links.map((item, index)=> ( 
            <NavLink
            to = {item.path}
             key = {index}
              className={`${styles.navItem} py-4 px-3 d-flex align-items-center justify-content-between pe-4`}>
                {/* <i class="fa-solid fa-people-group"></i> */}
                <div className="d-flex align-items-center gap-3">
                    <i className={`fa-solid ${item.icon} ${styles.icon}`}></i>
                <span className={styles.linkTitle}> {item.title}</span>
                </div>
                {/* badge */}
                {item.title === "users management" && hasUsersDraft && (
                    <span className="badge bg-danger text-white ms-auto fw-normal align-self-center" style={{fontSize: '0.75rem'}}>draft</span>
                )}
            </NavLink>))}
        </nav>
      </aside>
  )
}
export default Sidebar;