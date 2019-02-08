'use strict'

import {appElem, DG, wrapper, setPins} from './utilites'
import {renderProfileAlbum} from "./ProfileAlbum";
export let mainContent
export let allAlbsCont

export let renderMainContent = () => {

    let albs = JSON.parse(localStorage.getItem('albums'))

    mainContent = appElem("section", wrapper)
    mainContent.className = "main_content"

    let profileInfo = appElem("section", mainContent)
    profileInfo.className = "prof_info"

    let profileAvatar = appElem("img", profileInfo)
    profileAvatar.className = "prof_ava"
    profileAvatar.src = "https://pp.userapi.com/SA0NDohEXpi3yWVEUVjpK2kpPjJJUK2ZkMy5KQ/vNxulmImT2s.jpg?ava=1"

    let profileNick = appElem("p", profileInfo)
    profileNick.className = "prof_nick"
    profileNick.innerText = "Emiro"

    let profileName = appElem("p", profileInfo)
    profileName.className = "prof_name"
    profileName.innerText = "Alex Zirenko"

    let allMap = appElem("section", mainContent)
    allMap.className = "all_map"

    let allMapLayer
    if(albs.length !== 0){
           allMapLayer =  DG.map(allMap , {
            'center': [47.27923, 2.8125],
            'zoom': 1
        });
    }else {
        let noPlaces = appElem("p", allMap)
        noPlaces.innerText = "NO places"
    }

    allAlbsCont = appElem("section", wrapper)
    allAlbsCont.className = "all_albs_cont"
    let allAlbsWrapp = appElem("section", allAlbsCont)
    allAlbsWrapp.className = "all_albs_wrapp"

    albs.forEach((currValue, index, albs)=>{
        let albCont = appElem("div", allAlbsWrapp)
        albCont.className = "albs_item"
        albCont.id = "alb_item_" + index
        albCont.addEventListener("click", renderProfileAlbum)
        let albImg =  appElem("img", albCont)
        albImg.src = currValue.links[0]
        setPins(currValue.address, allMapLayer)
        albImg.className = "alb_img"
        let albName = appElem("div", albCont)
        albName.innerText = currValue.name
        albName.className = "alb_name"
    })
}

