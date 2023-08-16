document.getElementById('btn-diposit').addEventListener('click', function () {
    const dipositAmaunt = document.getElementById('deposit-ammount');
    const newAmauntOfDepositString = dipositAmaunt.value;
    const newAmauntOfDeposit = parseFloat(newAmauntOfDepositString);



    const totalAmaunt = document.getElementById('total-amaunt');
    const previousdepositTotalAmauntstring = totalAmaunt.innerText;
    const previousdepositTotalAmaunt = parseFloat(previousdepositTotalAmauntstring)
    const currentAmaunt = previousdepositTotalAmaunt + newAmauntOfDeposit
    totalAmaunt.innerText = currentAmaunt;
    dipositAmaunt.value = '';
     


    const blanceAmaunt = document.getElementById('blance-amaunt');
    const blanceAmauntString = blanceAmaunt.innerText;
    const previousBlanceAmaunt = parseFloat(blanceAmauntString);
    const currentBlanceAmaunt = previousBlanceAmaunt + newAmauntOfDeposit;
    blanceAmaunt.innerText = currentBlanceAmaunt;



  
})
document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawAmaunt = document.getElementById('withdraw-amaunt');
    const withdrawAmauntstring = withdrawAmaunt.value;
    const previousWithdrawAmaunt = parseFloat(withdrawAmauntstring);


    const totalWithdraw = document.getElementById('total-withdraw');
    const totalWithdrawString = totalWithdraw.innerText;
    const previousTotalWithdraw = parseFloat(totalWithdrawString);
    const currenWithdraw = previousTotalWithdraw + previousWithdrawAmaunt;
    totalWithdraw.innerText = currenWithdraw;
    withdrawAmaunt.value = '';


    const blanceAmaunt = document.getElementById('blance-amaunt');
    const blanceAmauntString = blanceAmaunt.innerText;
    const previousBlanceAmaunt = parseFloat(blanceAmauntString);
    const currentBlanceAmaunt = previousBlanceAmaunt - previousWithdrawAmaunt;
    blanceAmaunt.innerText = currentBlanceAmaunt;

})