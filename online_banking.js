function storeData() {
    const AccData={
        Username:uname.value,
        Accno:accno.value,
        Password:pwd.value
    }
    console.log(AccData);
    if(AccData.Username==''||AccData.Accno==''||AccData.Password==''){
        alert('Please fill all the fields');
    }
    else{
        if(AccData.Accno in localStorage){
            alert('Account Number already exists');
        }
        else{
            localStorage.setItem(AccData.Accno,JSON.stringify(AccData))

        }
    }
    
}

function loginData(){
    let Accno=accno.value
    let Pwd=pwd.value
    if(Accno in localStorage){
        let Data=JSON.parse(localStorage.getItem(Accno))
        if(Pwd==Data.Password){
            localStorage.setItem('AccNo',Accno)
            alert('login success full')
            window.location="./home.html"
        }
        
    }
    
}