// const test = document.getElementById("add-article");

// function open_infos() {
//     width = 300;
//     height = 200;
//     if (window.innerWidth) {
//         var left = (window.innerWidth - width) / 2;
//         var top = (window.innerHeight - height) / 2;
//     } else {
//         var left = (document.body.clientWidth - width) / 2;
//         var top = (document.body.clientHeight - height) / 2;
//     }
//     window.open('index.html', 'nom_de_ma_popup', 'menubar=no, scrollbars=no, top=' + top + ', left=' + left + ', width=' + width + ', height=' + height + '' );
// }

// test.addEventListener("click", event => {
//     open_infos();
// })

window.alert = function(titre, message) {
	document.getElementById("alertPanel").innerHTML = "<span class=\"close\" onclick=\"closealert();\"></span><h2>" + titre + "</h2><div class=\"texte\">" + message + "</div>";
	document.getElementById('alertPanel').style.display='block';
	document.getElementById('overlay').style.display='block';
}
function closealert()
{
	document.getElementById('alertPanel').style.display='none';
	document.getElementById('overlay').style.display='none';
}
