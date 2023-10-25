document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Menghentikan pengiriman form default

    // Mendapatkan nilai input dari form
    var nama = document.getElementById('nama').value;
    var email = document.getElementById('email').value;
    var alamat = document.getElementById('alamat').value;

    // Validasi input
    if (nama === '' || email === '' || alamat === '') {
        alert('Semua field harus diisi!');
    } else {
        alert('Pendaftaran berhasil!\nNama: ' + nama + '\nEmail: ' + email);
        // Di sini Anda dapat melakukan pengiriman data ke server atau langkah-langkah berikutnya
    }
});