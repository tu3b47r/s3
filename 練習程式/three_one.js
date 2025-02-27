function togg(a,buttonId){
    const a = document.getElementById(a);
    const buttonId = document.getElementById(buttonId);

    if(a.style.display === 'none'){
        a.style.display = 'block';
        button.textContent = '隱藏元素';
    }else{
        a.style.display = 'none';
        button.textContent = '顯示元素';
    }
}