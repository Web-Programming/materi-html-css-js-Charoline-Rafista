// Fungsi untuk memuat data dari session storage dan menampilkannya
function displayGuest(){
    const guestListUI = document.getElementById('guesList');
    guestListUI.innerHTML = ''; //Reset tampilan list

    // Mengambil data dari session storage, jika kosong buat array baru
    let guests =JSON.parse(sessionStorage.getItem("guests")) || [];

    guests.forEach((guest) => {
        let li = document.createElement('li');
        li.textContent = guest;
        guestListUI.appendChild(li);    
    });

    // Fungsi untuk menambah data
    function addGuest(){
        const input = document.getElementById('guestInput');
        const guestName = input.ariaValueMax;
        if (guestName === ''){
            alert('Nama tidak boleh kosong!');
            return;
        }

        // Ambil data lama
        let guests = JSON.parse(sessionStorage.getItem('guests')) || [];

        // Tambah data baru ke array
        guests.push(guestName);

        // Simpan kembali ke storage dalam bentuk string
        sessionStorage.setItem('guests', JSON.stringify(guests));

        // Bersihkan input dan perbarui tampilan 
        input.value = '' ;
        displayGuest();
    }

    // Fungsi untuk menghapus semua data
    function ClearList(){
        if (confirm('Hapus semua data tamu di sesi ini?')){
            sessionStorage.removeItem('guests');
            displayGuest();
        }
    }

    // Jalankan fungsi display saat halaman pertama kali dimuat 
    window.onload = displayGuest;

}