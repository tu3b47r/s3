function changecolor (){
    var tle1 = document.getElementById('tle1');
    var ra1 = document.getElementByName('color');

    var sent1;
    for(var u = 0;ra1.lenght;u++){
        if(ra1[i].checked){
            sent1 = ra1[i].value;
            break;
        }
    }
    tle1.style.color = sent1;
}
