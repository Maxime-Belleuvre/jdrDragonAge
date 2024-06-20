function getStuffs(url){
    
    fetch(url)
    .then(res => res.json())
    .then(data=> {

        document.getElementById("submitClassEmplacementStuff").addEventListener("click", (e) => manageEvent.submitFormClass(e,data));


        document.getElementById("submiTypeEmplacementStuff").addEventListener("click", (e) => manageEvent.submitFormType(e,data));


        document.getElementById("searchItem").addEventListener("click", (e) => manageEvent.searchItem(e,data));
        
        document.getElementById("reset").addEventListener("click", (e) => resetBlockForm());
    })
}
getStuffs("./json/tryStuff.json")

import * as manageEvent from "./jdrDragonAge/js/event.js"
import {resetBlockForm} from "./jdrDragonAge/js/modifyDOM.js"



