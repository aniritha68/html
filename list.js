$(document.body).click(function(){
function print(classval){
$(".classval li").each(function(i){
console.log($( this ).text() );
});
}
$("button2").click(function(){
var va1 = $('#button1').val();
console.log(va1);
if(va1 === "bevarages"){
print("list");
}
var val2 = $('#button2').val();
console.log(val2);
if(val2 === "fruits"){
print("list1");
}
var val3 = $('#button3').val();
console.log(val3);
if(val3 === "flowers"){
print("list2");
}
});
});

