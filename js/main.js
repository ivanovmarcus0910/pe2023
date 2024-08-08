function getValueCheckBox(){
    var sum=0;
    var string="";
    let check1=document.getElementById('box-check-1').checked;
    // console.log(check1);
    if (check1) {
        sum+=2;
        string=string+"<li> Coconut cream </li>";
    }
    let check2=document.getElementById('box-check-2').checked;
    if (check2) {
        sum+=2;
        string=string+"<li> Strawbery </li>";
    }
    //console.log(check2.checked);
    let check3=document.getElementById('box-check-3').checked;
    if (check3) {
        sum+=2;
        string=string+"<li> Durian ice-cream </li>";
    }
    //console.log(check3.checked);
    let check4=document.getElementById('box-check-4').checked;
    if (check4) {
        sum+=2;
        string=string+"<li> Buter cream </li>";
    }
    //console.log(check4.checked);
    let check5=document.getElementById('box-check-5').checked;
    if (check5) {
        sum+=2;
        string=string+"<li> Lychee Tea </li>";
    }
    let check6=document.getElementById('box-check-6').checked;
    if (check6) {
        sum+=2;
        string=string+"<li> Kunquat Tea </li>";
    }
    string=string+"<div class="+'"total"'+">"+"<p > Total amount: </p>"+sum+"$"+"</div>";
    //console.log(check5.checked);
    var addHTML= document.getElementById('order-table');
    addHTML.innerHTML="<ul>"+ string+ "</ul>";

}
let order = document.getElementById('orderButton');
order.addEventListener('click',getValueCheckBox);
