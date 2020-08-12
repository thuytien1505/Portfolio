function setCookie(name, value, exdays){
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = name + "=" + value + ";" + expires;
}

function getCookie(name){
  let cookieName = name + "=";
  let decodeCookies = decodeURIComponent(document.cookie);
  decodeCookies = decodeCookies.replace(/\s/g, '');
  let cookies = decodeCookies.split(";");
  console.log(cookies);
  for (let i=0; i<cookies.length;i++){
    if (cookies[i].includes(cookieName)) {
      console.log(cookies[i]);
      return cookies[i].substring(cookieName.length, cookies[i].length);
    }
  }
  return "";
}

var darkMode = (getCookie("darkMode") == "true");