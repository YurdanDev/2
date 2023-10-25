function penjumlahan() {
    // Ambil nilai dari input
    var bilangan1 = parseFloat(document.getElementById('bilangan1').value);
    var bilangan2 = parseFloat(document.getElementById('bilangan2').value);

    // Lakukan operasi penjumlahan
    var hasil = bilangan1 + bilangan2;

    // Tampilkan hasil sebagai pesan alert
    alert('Hasil penjumlahan: ' + hasil);

    // Bersihkan input
    document.getElementById('bilangan1').value = '';
    document.getElementById('bilangan2').value = '';
}

function ulang() {
    // Bersihkan input dan hasil
    alert('Hasil penjumlahan: ' + hasil);
}