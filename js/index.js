function hitungluas(e) {
  //   e.prevenDefault()
  var alas = document.getElementById("alas").value
  alas = parseInt(alas)
  var tinggi = document.getElementById("tinggi").value
  tinggi = parseInt(tinggi)
  var luas = (alas * tinggi) / 2
  document.getElementById("luas").value = luas
  console.log(alas)
}

function hitungluasJG(e) {
  //   e.prevenDefault()
  var alas = document.getElementById("alasJG").value
  alas = parseInt(alas)
  var tinggi = document.getElementById("tinggiJG").value
  tinggi = parseInt(tinggi)
  var luas = alas * tinggi
  document.getElementById("luasJG").value = luas
  console.log(alas)
}

function hitungKeliling(e) {
  //   e.prevenDefault()
  var panjang = document.getElementById("panjang").value
  panjang = parseInt(panjang)
  var lebar = document.getElementById("lebar").value
  lebar = parseInt(lebar)
  var sisiC = document.getElementById("sisiC").value
  sisiC = parseInt(sisiC)
  var keliling = 2 * (panjang + lebar)
  document.getElementById("kelilingJG").value = keliling
}

function reset() {
  document.getElementById("alas").value = ""
  document.getElementById("tinggi").value = ""
  document.getElementById("luas").value = ""
  document.getElementById("sisiA").value = ""
  document.getElementById("sisiB").value = ""
  document.getElementById("sisiC").value = ""
  document.getElementById("keliling").value = ""
  document.getElementById("alasJG").value = ""
  document.getElementById("tinggiJG").value = ""
  document.getElementById("luasJG").value = ""
  document.getElementById("panjang").value = ""
  document.getElementById("lebar").value = ""
  document.getElementById("kelilingJG").value = ""
}
