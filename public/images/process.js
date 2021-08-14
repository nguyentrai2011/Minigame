$(document).ready(function(){
    
    var currentAccount = "";
    checkMM();
    
    $("#connectMM").click(function(){
        connectMM().then((data) => {
            currentAccount = data[0];
            console.log(currentAccount);
        }).catch((err)=> {
            console.log(err);
        });
    });
    $("#btnRegister").click(function(){
        $.post("./register", {
            email: $("#txtEmail").val(),
            name: $("#txtName").val(),
            phoneNumber:$("#txtPhoneNumber").val()
        }, function(data) {
            console.log(data);
        });
    });
});

async function connectMM() {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    return accounts;
}

function checkMM() {
    if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask is installed!');
    }
    else {
        console.log('MetaMask isn\'t installed!')
    }
}