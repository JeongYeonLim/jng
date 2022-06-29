const id = document.getElementById('ID')     //Id가 '__'인 요소 가져옴
const password = document.getElementById('PW')     //Id가 '__'인 요소 가져옴


const join_id = document.getElementById('JOIN_ID')
const join_pw = document.getElementById('JOIN_PW')


function join(){
    location.href='join_develop.html'
}

function join_check(){

    if(join_id.value == '' && join_pw.value == ''){
        alert('ID와 PASSWORD를 입력하세요.')
    }else{
        if(join_id.value == localStorage.getItem(id.value)){
            alert('이미 존재하는 ID입니다.')
        }else{
            localStorage.setItem(id.value, password.value)
            location.href = 'login_develop.html'
        }
    }
    
}

function login(){

    if(id.value == '' && password.value == ''){      
        alert('ID와 PASSWORD를 입력하세요.')      //id, pw 둘다 빈칸이면
    } 
    else if (id.value == ''){
        alert('ID를 입력하세요.')       //id만 빈칸
    }else if(password.value == ''){
        alert('PASSWORD를 입력하세요')      //pw만 빈칸
    }
    else{  //id와 pw 둘다 입력이 있다면 localStorage에 저장하고 main페이지로 이동
        //localStorage.setItem(id.value, password.value)
        location.href = 'main_develop.html'
    }

}


function back(){  //로그인 페이지로 이동
    location.href = 'login_develop.html'
}

