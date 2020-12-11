var btntrans=document.querySelector("#btn-translate");
var txtinput=document.querySelector("#text-input");
var outputdiv=document.querySelector("#output");

var serverurl="https://api.funtranslations.com/translate/dothraki.json"

function gettranslationurl(text){
    return serverurl+"?"+"text="+text;
}

function errorhandler(error){
    console.log("error occured"+error)
    alert("Something wrong with server,try again on some time")
}



btntrans.addEventListener("click",clickHandler)

function clickHandler(){
    var inputtext=txtinput.value;

    fetch(gettranslationurl(inputtext))
    .then(response=>response.json())
    .then(json=>{
        var transtext=json.contents.translated;
        outputdiv.innerText=transtext;
    })
    .catch(errorhandler)


}