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



export {modifyTable, blockForm, createOption, resetBlockForm, resetOptionForm}