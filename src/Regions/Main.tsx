import * as React from "react";
import {Outlet} from "react-router-dom";
import {GlobalStoreProvider2} from "../Elements/GlobalStore";

function Main() {
    return (
        <main className={"mb-5 "}>
                <GlobalStoreProvider2>
                    <Outlet />
                </GlobalStoreProvider2>
        </main>
    );
}

export default Main
