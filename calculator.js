var box=document.getElementById("output");
function insert(x){
    if(x=='evaluate'){
        box.value=eval(box.value)
    }
    else if(x=='clear'){
        box.value=" ";
    }
    else{
        box.value+=x;
    }
}