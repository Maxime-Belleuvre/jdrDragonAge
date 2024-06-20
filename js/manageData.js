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



export {selectResult, sortType, SelecType, sortStuff}