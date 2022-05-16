function generator(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}
var colorArray = ["#ADFF2F","#7FFF00","#7CFC00","#00FF00","#32CD32","#98FB98","#90EE90","#00FA9A","#00FF7F","#3CB371","#2E8B57","#228B22","#008000","#006400","#9ACD32","#6B8E23","#808000","#556B2F","#66CDAA","#8FBC8F","#20B2AA","#008B8B","#008080"];
var i = 0;
function out_color(){
    document.getElementById('out_color').style.background = colorArray[i];
    i++;
    if(i >= colorArray.length){
        i=0;
    }

}
function reset(){
    document.getElementById("out_word").innerHTML = "";
    document.getElementById("out_color").style.background = "none";
}
var res = document.getElementById("clear");
var but = document.getElementById("gen");
var out_word = document.getElementById("out_word");
var color = document.getElementById("out_color");
but.onclick=function(){
    out_word.innerHTML=generator(10);
    color.innerHTML=out_color();
}
res.onclick=function(){
    out_word.innerHTML=reset();
    color.innerHTML=reset();
}