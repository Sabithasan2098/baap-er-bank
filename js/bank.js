document.getElementById('btn-submit').addEventListener('click',function(){
    const usarEmail = document.getElementById('usar-email');
    const email = usarEmail.value;
    const usarPassword = document.getElementById('usar-password');
    const password = usarPassword.value;
    if(email === 'monurma@gmail.com' && password === 'hio'){
        window.location.href = "bank.html";
    }
    else{
        alart('invalid user');
    }
})