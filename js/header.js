'use strict'
import {renderMainContent} from "./mainContent"
import {removeProfileAlbum, } from "./ProfileAlbum";
import{appElem} from './utilites'
import {wrapper} from "./utilites";

let header = appElem( "header", wrapper )
header.className = "header"
header.addEventListener('click', removeProfileAlbum)

let headerContent = appElem( "div", header )
headerContent.className = "header_contet"

let headerText = appElem( "h1", headerContent )
headerText.className = "header_text"
headerText.innerText = "Favorite Places"

    TweenMax.fromTo(headerContent, 1, {opacity:0}, {opacity:1, onComplete: () => {
        TweenMax.fromTo(headerText, 1, {opacity:0}, {opacity:1, onComplete: () => {
            TweenMax.fromTo(headerContent, 1.5, {marginTop: "30vh"}, {marginTop: "0", onComplete: () => {
                TweenMax.fromTo(headerContent, 1, {borderRadius: "50%"},{borderRadius: "0px", onComplete: () => {
                    TweenMax.fromTo(headerContent, 1, {width: "30vw"}, {width:"100vw" , onComplete: () => {
                            header.style.height = "20vh"
                            renderMainContent()
                    }})
                }})
            }})
        }})
    }})


