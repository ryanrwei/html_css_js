//產生驗證碼
function createCode(){
        code = "";
        let codeLength = 4;//驗證碼的長度
        let checkCode = document.getElementById("code");
        let random = new Array(0,1,2,3,4,5,6,7,8,9);//隨機數
        for(let i = 0; i < codeLength; i++) {//迴圈操作
                let index = Math.floor(Math.random()*10);//取得隨機數的索引（0~35）
                code += random[index];//根據索引取得隨機數加到code上
        }
        checkCode.value = code;//把code值賦給驗證碼


        // let codeColor = document.getElementById("code");
        // colorList = new Array('#FF1C1C', '#FFCC6E', '#FFFF1C', '#1AFF19', '#1CFFFF', '#1212FF', '#9F1CFF', '#FF19FF', '#8C8C8C')
        // let index = Math.floor(Math.random()*colorList.length);
        // codeColor.style.backgroundColor = colorList[index];
}

function changeColor(){
        let codeColor = document.getElementById("code");
        colorList = new Array('#FF1C1C', '#FFCC6E', '#FFFF1C', '#1AFF19', '#1CFFFF', '#1212FF', '#9F1CFF', '#FF19FF', '#8C8C8C')
        let index = Math.floor(Math.random()*colorList.length);
        codeColor.style.backgroundColor = colorList[index];
}

function loginMessege(){
        alert("https://cn.pornhub.com/video/search?search=blaire+ivory");
}


window.onscroll = scrollFunction; //每當畫面捲動觸發一次

function scrollFunction() { 
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                document.getElementById("myBtn").style.display = "block";
        } else {
                document.getElementById("myBtn").style.display = "none";
        }
}//網頁捲動超過200pixel就會跑出來 display設定成block 跑回上面就隱藏。

// 重置scrollTop這個變數的值
function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}