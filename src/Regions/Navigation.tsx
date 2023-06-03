import * as React from "react";
import {menuList} from "../App";
import {Link} from "react-router-dom";

function Navigation() {
    return (<>
        <div className="nav-scroller py-1  ">
            <nav className="nav nav-underline justify-content-center g-5">
                {menuList.map((menuItem: any) => {
                    return (
                        <Link to={menuItem.path} className={"nav-item nav-link link-body-emphasis"}>{menuItem.title}</Link>
                        )
                })}
            </nav>
        </div>
    </>);
}

export default Navigation
