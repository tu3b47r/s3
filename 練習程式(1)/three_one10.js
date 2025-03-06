var myf = document.getElementById('myf');
myf.addEventListener('submit',function(e)){
  if(!windoww.confirm('確定要交表單嗎？'))
     e.preventDefault()；
},false);
