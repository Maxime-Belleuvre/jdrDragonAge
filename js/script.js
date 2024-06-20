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




function selectResult(data){
    let newArray = [];
    data.forEach((result)=>{
        if(result.class === document.getElementById("classStuff").value){         
                newArray.push(result);
        }
    })
    return newArray;
}

function sortType(array){
    let typeArray = [];
    for (let i = 0; i < array.length; i++){
        for (const item of array){
            if(!typeArray.includes(item.type)){
                typeArray.push(item.type);
            } 
        }
    }
    return typeArray;
}

function SelecType(array) {
    let stuffArray = [];
    array.forEach((res)=>{
        if(res.type === document.getElementById("typeStuff").value){
            stuffArray.push(res.name);
        }
    });
    return stuffArray;
}



function sortStuff(array){
    let nameArray = [];
    for (let i = 0; i < array.length; i++){
        for (const item of array){
            if(!nameArray.includes(item)){
                nameArray.push(item);
            } 
        }
    }
    return nameArray;
}

function modifyTable(data){
    console.log(data);
    blockForm("stuffEmplacementName","itemValue")
    getName(data);
    getRequi(data);
    if(data.class === "weapons"){
        getDegat(data);
    }else if(data.class === "armor"){
        console.log("coucou armure");
        getPr(data);
    }
    getSe(data);
    getEffet(data);
}

function blockForm(actualForm,nextForm){
    document.getElementById(actualForm).classList.remove("active");
    document.getElementById(nextForm).classList.add("active");
    
    
}

function createOption(array, element){
    for (let i = 0; i < array.length; i++){
        const optionValue = document.createElement("option");
        optionValue.attributes["value"] = array[i];
        optionValue.textContent = array[i];
        document.getElementById(element).appendChild(optionValue);
    }
}

function getName(data){
    console.log(data);
    document.getElementById("nameStuff").textContent = data.name
}
function getRequi(data){
    document.getElementById("requiStuff").textContent = data.req
}
function getDegat(data){
    document.getElementById("hearderDegat").textContent = "dégâts";
    document.getElementById("degat").textContent = data.degat
}
function getPr(data){
    document.getElementById("hearderDegat").textContent = "PR";
    document.getElementById("degat").textContent = data.pr
}
function getSe(data){
    document.getElementById("se").textContent = data.se
}
function getEffet(data){
    document.getElementById("effet").textContent = data.effect
}

function resetBlockForm(){

    document.getElementById("stuffEmplacementName").classList.remove("active");
    document.getElementById("itemValue").classList.remove("active");
    document.getElementById("typeEmplacementStuff").classList.remove("active");
    document.getElementById("classEmplacementStuff").classList.add("active");

    resetOptionForm()
    resetValueForm()
}

function resetOptionForm(){
    console.log("coucou toi");
    document.querySelectorAll("#stuffName>option").forEach(option => option.remove());
    document.querySelectorAll("#typeStuff>option").forEach(option => option.remove());
}

function resetValueForm(){
    document.querySelectorAll("form").forEach(form=>{
        form.value = null;
    })
}



