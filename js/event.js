function submitFormClass(e,data){
    e.preventDefault();
    blockForm("classEmplacementStuff","typeEmplacementStuff")

    const newArray = manageData.selectResult(data.stuffs);
    const typeArray = manageData.sortType(newArray);

    createOption(typeArray,"typeStuff")
}

function submitFormType(e,data){
    e.preventDefault();
    blockForm("typeEmplacementStuff","stuffEmplacementName")
    

    const newArray = manageData.selectResult(data.stuffs);
    let stuffArray = manageData.SelecType(newArray)
    const listStuffName = manageData.sortStuff(stuffArray);
    createOption(listStuffName,"stuffName")
}

function searchItem(e,data){
    e.preventDefault();

    const newArray = manageData.selectResult(data.stuffs);
    
    const nameItem = document.getElementById("stuffName").value;
    const seValue = document.getElementById("seValue").value;
   
    newArray.forEach((item)=>{
        if( item.name === nameItem && item.se == seValue){
            modifyTable(item)
        }
    })
}

import {modifyTable, blockForm, createOption, resetOptionForm} from "./modifyDOM.js"
import * as manageData from "./manageData.js"


export {submitFormClass, submitFormType, searchItem} 