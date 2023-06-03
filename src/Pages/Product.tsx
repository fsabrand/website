import * as React from "react";
import {menuList} from "../App";
import {Link} from "react-router-dom";
import {PersonFillCheck, } from 'react-bootstrap-icons';
import {
    BsCheckCircle,
    BsPersonFillCheck,
    BsPersonFillExclamation,
    BsPersonFillGear,
    BsPersonFillX
} from "react-icons/bs";
import {BiCheckShield} from "react-icons/bi";

function ProductDetails(){
    return(<div className="row align-items-md-stretch">
        <div className="col-md-6">
            <div className="mx-5 mb-5 mt-3">
                <img src={"/imgs/red-handbag.jpg"} className="img-fluid shadow"/>
            </div>
        </div>
        <div className="col-md-6">
            <div className="text-center d-flex justify-content-center ">
                <div className="border border-success rounded p-3 m-2">
                    <p className="fs-1 text-success">
                        <BsCheckCircle/>
                    </p>
                    <h5 className="">Authenticity</h5>
                </div>
            </div>

            <h1 className="pt-3 mb-3">Red Handbag Model 2023</h1>
            <h5>Description</h5>
            <p>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                alteration in some form,
                by injected humour, or randomised words which don't look even slightly believable.
                If you are going to use a passage of Lorem Ipsum, you need to be sure there
                isn't anything embarrassing hidden in the middle of text.
            </p>
        </div>
    </div>)
}

function ViewItem(props: any){

    let viewer = {
        'icon': <BsPersonFillGear/>,
        'textClass': 'textClass'
    }

    switch(props.data.type) {
        case 'success': {
            viewer.icon = <BsPersonFillCheck/>;
            viewer.textClass = 'text-success';
            break;
        }
        case 'warning': {
            viewer.icon = <BsPersonFillExclamation/>;
            viewer.textClass = 'text-warning';
            break;
        }
        case 'danger': {
            viewer.icon = <BsPersonFillX/>;
            viewer.textClass = 'text-danger';
            break;
        }
        default: {
            break;
        }
    }

    return(<>
        <a href={"/"} className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
                <h5 className="">
                    <span className={"text " + viewer.textClass}>
                        {viewer.icon}</span>
                    <span className={"px-2"}>
                        Viewer ID</span>
                    <span className="px-2">
                        {props.data.viewerID.substring(0, 9)}...</span>
                </h5>
                <small>{props.data.dateAgo}</small>
            </div>
            <p className="mb-1">
                {props.data.date} from {props.data.country}</p>
            <small className="text-muted">
                {props.data.viewerID}</small>
        </a>
    </>)
}


function ViewersBlock(props: any){
    const viewersList = [
        {
            'viewerID': 'db47125e-3ad5-4274-9393-62ce5003d6e5',
            'date': '2023 Jun 22, 11:59',
            'dateAgo': 'now',
            'country': '🇫🇮 Finland, Helsinki',
            'type': 'success'
        },{
            'viewerID': 'ff54b79e-0535-46da-b22b-7c3ffe26e602',
            'date': '2023 May 31, 23:05',
            'dateAgo': '1 month ago',
            'country': '🇸🇪 Sweden, Stocholm',
            'type': 'success'
        },{
            'viewerID': '8e7cce90-b1f2-460d-9f8f-f35dd5048454',
            'date': '2023 April 4, 01:18',
            'dateAgo': '2 months ago',
            'country': '🇫🇷 France, Paris',
            'type': 'success',
            'times': 2
        },{
            'viewerID': '538a3c29-ddd4-4b26-bc90-81e62de18c07',
            'date': '2022 Febrary 24, 03:41',
            'dateAgo': '1 year ago',
            'country': '🇷🇺 Russia, Moscow Region, Barvicha',
            'type': 'warning'
        },{
            'viewerID': 'd07021cb-61f3-489f-80c8-a52f7d72d69d',
            'date': '2022 Febrary 24, 04:43',
            'dateAgo': '1 year ago',
            'country': '🇨🇫 Central African Republic, Bangui',
            'type': 'danger'
        },{
            'viewerID': '8e7cce90-b1f2-460d-9f8f-f35dd5048454',
            'date': '2022 Febrary 24, 03:41',
            'dateAgo': '3 years ago',
            'country': '🇫🇷 France, Paris',
            'type': 'success',
            'times': 2
        },
    ]

    return(<div className="list-group">
        {viewersList.map(
            (viewItem: any) => (<ViewItem data={viewItem}/>)
        )}
    </div>)
}

function FASDetails(){

    const nowUUID = '93947c6b-651c-4306-9dc7-4431c1178f42'

    const fasDetailsList = [
        {
            'name': 'Product UUID',
            'value': nowUUID
        },{
            'name': 'Number of page views',
            'value': <p className="h5">
                8 views <small className="text-muted px-3">last 3 days ago</small></p>
        },{
            'name': 'Last Viewers',
            'value': <ViewersBlock/>
        },
    ]

    return(<div className="row align-items-md-stretch mb-5">
            <div className="col-lg-8 col-md-10 mx-auto">
                <div className="pt-5 pb-5 text-center">
                    <h2 className="mb-4">
                        <BiCheckShield/> FAS Details
                    </h2>
                    <p className="lead">Below is an example form built entirely with Bootstrap’s form controls. Each
                        required form group has a validation state that can be triggered by attempting to submit the
                        form without completing it.</p>
                </div>



                {fasDetailsList.map(
                    (fasItem: any) => (
                        <dl className="row">
                            <dt className="col-sm-3">
                                {fasItem.name}</dt>
                            <dd className="col-sm-9">
                                {fasItem.value}</dd>
                        </dl>)
                )}

            </div>
        </div>

    )
}

function ETC(){
    return(<>
        <div className="p-5 mb-4 bg-body-tertiary rounded-3">
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">Custom jumbotron</h1>
                <p className="col-md-8 fs-4">Using a series of utilities, you can
                    create this jumbotron, just like the one in previous versions of
                    Bootstrap. Check out the examples below for how you can remix and
                    restyle it to your liking.</p>
                <button className="btn btn-primary btn-lg" type="button">Example button</button>
            </div>
        </div>

        <div className="row align-items-md-stretch">
            <div className="col-md-6">
                <div className="h-100 p-5 text-bg-dark rounded-3">
                    <h2>Change the background</h2>
                    <p>Swap the background-color utility and add a `.text-*` color
                        utility to mix up the jumbotron look. Then, mix and match with
                        additional component themes and more.</p>
                    <button className="btn btn-outline-light" type="button">Example button</button>
                </div>
            </div>
            <div className="col-md-6">
                <div className="h-100 p-5 bg-body-tertiary border rounded-3">
                    <h2>Add borders</h2>
                    <p>Or, keep it light and add a border for some added
                        definition to the boundaries of your content. Be sure to look under the
                        hood at the source HTML here as we've adjusted the alignment and sizing
                        of both column's content for equal-height.</p>
                    <button className="btn btn-outline-secondary" type="button">Example button</button>
                </div>
            </div>
        </div>
    </>)
}


function Product() {
    // @ts-ignore
    return (<div>
        <ProductDetails/>
        <FASDetails/>
        <ETC/>
    </div>)
}

export default Product
