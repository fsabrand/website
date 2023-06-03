import * as React from "react";

import {Container} from "react-bootstrap";
import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";


function LayoutContent(){
    return (<>
        <Header/>

        <Main/>
        <Footer/>

    </>)
}


function Layout() {
    return (<div>
        <Container fluid="sm" className={"py-4"}>
            <Row>
                <Col>
                    <LayoutContent/>
                </Col>
            </Row>
        </Container>
    </div>)
}

export default Layout
