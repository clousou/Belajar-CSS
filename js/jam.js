function starTime() {

    var today = new Date();
    var jam = today.getHours();
    var menit = today.getMinutes();
    var detik = today.getSeconds();

    menit = cekAngka(menit);
    detik = cekAngka(detik);

    document.getElementById('clock').innerHTML = jam + ':' + menit + ':' + detik;

    //var refJam = setTimeout(starTime(), 1000);
    var t = setTimeout(function () { starTime() }, 1000);

}

function cekAngka(angka) {
    if (angka < 10) {
        angka = "0" + angka;
    }
    return angka;
}