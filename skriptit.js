function highlight(obj){
    var orig = obj.style.backgroundColor;
    obj.style.backgroundColor = 'red';
    setTimeout(function(){
         obj.style.backgroundColor = orig;
    }, 2000);
 }
