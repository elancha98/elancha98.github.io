function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

var delete_cookie = function(name) {
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};

window.onload = function() {
  var cookie = getCookie('aerl-pass');
  if (cookie != 'd99a079beeaff5f0e98e37f3c65d93167a0db647edcbd4ea15ad1fb65b0a3826') {
    pass = prompt("Introduzca la contraseña:", "");
    passha256 = sha256(pass);
    if (passha256 === 'd99a079beeaff5f0e98e37f3c65d93167a0db647edcbd4ea15ad1fb65b0a3826') {
      setCookie('aerl-pass', passha256, 1);
    } else {
      alert('contraseña incorrecta');
      window.location.replace('https://www.google.com');
      alert('stop');
    }
  }
  document.getElementsByTagName("BODY")[0].style. visibility = 'visible';
};
