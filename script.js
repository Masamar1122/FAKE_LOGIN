let container = document.getElementById('container');
let container2 = document.getElementById('container2');
let username = document.getElementById('username');
let password = document.getElementById('password');
let masuk = document.getElementById('masuk');
let singup = document.getElementById('singup');
let usernameInput = document.getElementById('usernameInput');
let passwordInput = document.getElementById('passwordInput');
let daftar = document.getElementById('daftar');
let back = document.getElementById('back');

container.style.display = "block";
container2.style.display = "none";

singup.onclick = function() {
  container.style.display = "none";
  container2.style.display = "block";
}

back.onclick = function() {
  container.style.display = "block";
  container2.style.display = "none";
}

masuk.onclick = function() {
  if(username.value.length == 0 && password.value.length == 0) {
    swal("Oops!", "Username & Password Salah");
    return false;
  }
  if(username.value.length == 0) {
    swal("Oops!", "Username Tidak Boleh Kosong");
    return false;
  }
  if(username.value.length < 6) {
    swal("Oops!", "Username Minimal 6 Karakter");
    return false;
  }
  if(password.value.length == 0) {
    swal("Oops!", "Password Tidak Boleh Kosong");
    return false;
  }
  if(password.value.length < 8) {
    swal("Oops!", "Password Minimal 8 Karakter");
    return false;
  }
  if(username.value == localStorage.getItem("username") && password.value == localStorage.getItem("password")) {
    location.href = "dashboard.html";
  }else {
    swal("Oops!", "Silahkan Daftar Terlebih Dahulu");
    return false;
  }
}

daftar.onclick = function() {
  if(usernameInput.value.length == 0 && passwordInput.value.length == 0) {
    swal("Oops!", "Tidak Boleh Kosong");
    return false;
  }
  if(usernameInput.value.length == 0) {
    swal("Oops!", "Username Tidak Boleh Kosong");
    return false;
  }
  if(usernameInput.value.length < 6) {
    swal("Oops!", "Username Minimal 6 Karakter");
    return false;
  }
  if(passwordInput.value.length == 0) {
    swal("Oops!", "Password Tidak Boleh Kosong");
    return false;
  }
  if(passwordInput.value.length < 8) {
    swal("Oops!", "Password Minimal 8 Karakter");
    return false;
  }
  localStorage.setItem("username", usernameInput.value);
  localStorage.setItem("password", passwordInput.value);
  
  if(localStorage.getItem("username", usernameInput.value) && localStorage.getItem("password", passwordInput.value)) {
    localStorage.setItem("role", "user")
    swal("Akun Berhasil Dibuat", "Akun Berhasil Dibuat", "success");
    setTimeout(function() {
      location.reload();
    }, 1000);
  }
}