function addListItem(listId){
    let newIt = prompt('輸入新增項目文字')；
    const l1 = document.getElementById(listId);

    const newl1 = document.createElement('li');

    newl1.textContent = newlt;
    l1.appendChild(newl1);
}
