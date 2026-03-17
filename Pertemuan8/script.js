// 1. VARIABLE: Menyimpan data produk dalam bentuk JSON Array
const products = [
    {
        id: 1,
        nama: "Sofa Minimalis Biru",
        harga: 3200000,
        diskon: 4500000,
        kategori: "Ruang Tamu",
        stok: 5,
        gambar: "https://picsum.photos/id/1068/400/400&quot"
    },
    { id: 2, nama: "Meja Makan Jati", harga: 5800000, diskon: 0, kategori: "Dapur", stok: 2, gambar: "https://picsum.photos/id/445/400/400&quot" },
    { id: 3, nama: "Rak Buku Oak", harga: 1500000, diskon: 0, kategori: "Ruang Kerja", stok: 0, gambar: "https://picsum.photos/id/367/400/400&quot" },
    { id: 4, nama: "Meja Kerja Ergonomis", harga: 2100000, diskon: 0, kategori: "Ruang Kerja", stok: 8, gambar: "https://picsum.photos/id/20/400/400&quot" },
    { id: 5, nama: "Lampu Tidur Artistik", harga: 4500000, diskon: 0, kategori: "Kamar Tidur", stok: 12, gambar: "https://picsum.photos/id/48/400/400&quot" },
    { id: 6, nama: "Kursi Santai Teras", harga: 850000, diskon: 1200000, kategori: "Outdoor", stok: 4, gambar: "https://picsum.photos/id/10/400/400&quot" },
    { id: 7, nama: "Lemari Pakaian Slide", harga: 4200000, diskon: 0, kategori: "Kamar Tidur", stok: 3, gambar: "https://picsum.photos/id/449/400/400&quot" },
    { id: 8, nama: "Meja Rias Modern", harga: 2750000, diskon: 3000000, kategori: "Kamar Tidur", stok: 0, gambar: "https://picsum.photos/id/635/400/400&quot" },
    { id: 9, nama: "Kursi Makan Velvet", harga: 950000, diskon: 0, kategori: "Dapur", stok: 10, gambar: "https://picsum.photos/id/192/400/400&quot" },
    { id: 10, nama: "Karpet Bulu Mewah", harga: 1200000, diskon: 1500000, kategori: "Ruang Tamu", stok: 6, gambar: "https://picsum.photos/id/201/400/400&quot" }
];

// Fungsi untuk merender produk ke dalam DOM
function renderProducts() {
    // DOM: Menyeleksi elemen container
    const container = document.getElementById('product-container');
    container.innerHTML = ""; // Bersihkan container terlebih dahulu
    // 2. LOOP: Mengiterasi setiap item di dalam array products
    products.forEach(product => {
        // 3. KONDISI (Logic)
        let badgeHTML = "";
        let priceHTML = "";
        let buttonHTML = "";

        // Mengecek apakah ada diskon
        if (product.diskon > 0) {
            badgeHTML = `<span class="badge-promo">DISKON!</span>`;
            priceHTML = `<span class="text-muted text-decoration-line-through small">Rp ${product.diskon.toLocaleString()}</span><br>
                        <span class="fw-bold text-danger">Rp ${product.harga.toLocaleString()}</span>`;
        } else {
            priceHTML = `<span class="fw-bold text-dark">Rp ${product.harga.toLocaleString()}</span>`;
        }

        // Mengecek stok produk
        if (product.stok > 0) {
            buttonHTML = `<button class="btn btn-buy p-2" onclick="alert('Ditambahkan ke keranjang: ${product.nama}')">Beli Sekarang</button>`;
        } else {
            buttonHTML = `<button class="btn btn-secondary p-2 w-100" disabled>Stok Habis</button>`;
        }

    // 4. DOM MANIPULATION: Membuat template HTML
    // untuk setiap card
    const productHTML = `
        <div class="col-12 col-md-6 col-lg-4 
        col-xl-3">
            <div class="card product-card 
            shadow-sm p-2 position-relative">
                ${badgeHTML}
                <img src="${product.gambar}" 
                class="card-img-top" alt="${
                product.nama}">
                <div class="card-body">
                    <small class="text-uppercase text-muted" style="font-size:0.7rem;"> ${product.kategori}</small>
                    <h6 class="card-title fw-bold mb-3
                    mt-1">${product.nama}</h6>
                    <p class="card-text mb-3">
                        ${priceHTML}
                    </p>
                    ${buttonHTML}
                </div>
            </div>
        </div>`
    ;

    // Menyisipkan HTML ke dalam container
    container.innerHTML += productHTML;
    });
}

// Jalankan fungsi render saat halaman selesai dimuat
document.addEventListener('DOMContentLoaded', renderProducts);

















// //fungsi untuk merender produk ke dalam DOM
// function renderProducts(){
//     //DOM: Menyeleksi elemen container
//     const container = document.getElementById('Product-container');
//     container.innerHTML = ""; //Bersihkan container terlebih dahulu 

//     //2. LOOP: Mengiterasi setiap item di dalam products
//     products.forEach(product => {
//         //3. KONDISI(Logic)
//         let badgeHtml ='';
//         let priceHtml ='';
//         let buttonHtml ='';
//         //Mengecek apakah ada diskon 
//         if(product.diskon >0){
//             badgeHtml = `<span class = "badge-promo">DISKON!</span>`;
//             priceHtml = `<span class = "text-muted text-decoration-line-through small">Rp ${product.diskon.
//             toLocaleString()}</span><br>
//                             <span class = "fw-bold text-danger">Rp ${product.harga.toLocaleString()}</span>`;
//         }else{
//             priceHtml = `<span class = "fw-bold text-dark">Rp ${product.harga.toLocaleString()}</span>`;
//         }
//         //Mengecek stok produk
//         if(product.stok > 0){
//             buttonHtml = `<button class = "btn btn-buy p-2" onclick="alert('Ditambahkan ke keranjang: ${product.nama}')">Beli Sekarang</button>`;
//         }else {
//             buttonHtml = `<button class="btn btn-secondary p-2 w-100" disabled> Stock Habis</button>`;
//         }
//         //
//     }

