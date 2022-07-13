var inputs = document.querySelectorAll(".inputs");
var calculate = document.querySelector("#calculate");
var output = document.querySelector("#output");

calculate.addEventListener("click",result);

function result(){
    var initialprice = Number(inputs[0].value);
    var quantity = Number(inputs[1].value);
    var currentprice = Number(inputs[2].value);

    if(initialprice > currentprice){
        var loss = (initialprice-currentprice)*quantity;
        var losspercent = (loss/ initialprice)*100;

        output.innerText = "Loss is=" + loss + " Loss Percent=" + losspercent;
    }else if(currentprice>initialprice){
        var profit = (currentprice - initialprice)*quantity;
        var profitpercent = (profit/initialprice)*100;

        output.innerText = "Profit is=" + profit + " Profit Percent=" + profitpercent;
    }else{
        output.innerText = "No pain no gain";
    }
    
}