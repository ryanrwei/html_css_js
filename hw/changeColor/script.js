function changeColor(){
        let color = document.getElementById("color");
        let word = document.getElementById("word");

        let code = "#";
        let random = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];//隨機數
        for(let i = 0; i < 6; i++) {//迴圈操作
                let index = Math.floor(Math.random()*random.length);//取得隨機數的索引（0~35）
                code += random[index];//根據索引取得隨機數加到code上
        }
        color.style.backgroundColor = code;
        word.innerHTML = "Background Color: " + code;
}
