var myf1 = document.getElementById('myf1');
myf1.addEventListener('submit',function(e)){
  if(!window.confirm('確定要交表單嗎？'))
     e.preventDefault()；
},false);
