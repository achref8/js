// var i ;
// for(i=0;i<10;i++){
//     alert(i);
// }
// var i=0;
// while(i<10){
//     alert(i);
//     i++;
// }
// var a =[5,9,3,4];
// a.push(9);
// alert(a);
// function mean (a,b,c)
// {
//     return ((a+b+c)/3);
// }
// alert (mean (3,5,7));
// alert (mean (9,1,10));
// var colors 
// var aa=b.g

function gras(){
    if(document.getElementById("makrem").style.fontWeight=="bold"){
        document.getElementById("makrem").style.fontWeight="normal";
    }
    else{
        document.getElementById("makrem").style.fontWeight="bold";
    }
}
function itali() {
    if(document.getElementById("makrem").style.fontStyle=="italic"){
        document.getElementById("makrem").style.fontStyle="normal";
    }
    else{
        document.getElementById("makrem").style.fontStyle="italic";
    }
}
function underli() {
    if(document.getElementById("makrem").style.textDecoration=="underline"){
        document.getElementById("makrem").style.textDecoration="none";
    }
    else{
        document.getElementById("makrem").style.textDecoration="underline";
    }
}
function siz() {
    document.getElementById("makrem").style.fontSize=document.getElementById("achref").value;
}
function font() {
    document.getElementById("makrem").style.fontFamily=document.getElementById("azerty").value;
}

