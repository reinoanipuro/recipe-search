function ik(val) {
    document.getElementById('hakubox').value += val;
};

document.addEventListener('DOMContentLoaded', function () {
    let link = document.getElementById('link');
    // onClick's logic below:
    link.addEventListener('click', function () {


        let hakubox = document.getElementById("hakubox").value;
        let allergia = document.getElementById("allergia").value;
        let erityisrv;
        
        if (allergia === 'Ei mitään ') {
            erityisrv = "";
        }
        else {
            erityisrv = document.getElementById("allergia").value;
        }

        let kaksi = 'https://www.google.com/search?q=' + encodeURIComponent(erityisrv) + encodeURIComponent(hakubox) + 'resepti';
        window.location = kaksi;

    });
});

function highlight(obj){
    var orig = obj.style.backgroundColor;
    obj.style.backgroundColor = 'red';
    setTimeout(function(){
         obj.style.backgroundColor = orig;
    }, 2000);
 };

