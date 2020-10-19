page = 1;

function nextArticle() {
    switch (page) {
        case 1:
            text = "<b>Jelaskan kapan saat yang tepat menggunakan metode byID. Jelaskan kelebihan dan kekurangannya.</b><br />Metode byID menggunakan id untuk mencari elemennya. Jika ada elemen yang memakai id yang sama, elemen yang dituju adalah elemen yang pertama. Digunakan saat programmer ingin mengambil elemen dengan id tertentu (karena id pada elemen tidak boleh sama).<br /><br />Kelebihan: <br />- Lebih mudah digunakan karena id sudah jelas<br />- Memudahkan programmer untuk mengintai setiap event dari elemen dengan id bersangkutan<br />Kekurangan:<br />- Id tidak boleh sama pada elemen<br />- Programmer harus menghafal id agar tidak sama pada saat digunakan";
            break;
        case 2:
            text = "<b>Jelaskan kapan saat yang tepat menggunakan metode byTagName. Jelaskan kelebihan dan kekurangannya.</b><br />Metode getElementsByTagName() ini mengembalikan kumpulan elemen dengan nama tag yang sudah ditentukan, sebagai objek NodeList. Kumpulan elemen ini bisa diakses dengan nomor indeks. Indeks tersebut dimulai dari 0. Digunakan jika programmer ingin melakukan perubahan pada elemen dengan tag tertentu.<br /><br />Kelebihan:<br />- Bisa digunakan untuk mengambil banyak elemen dengan tag sama<br />- Elemen yang diambil dikumpulkan dalam bentuk array (dengan index)<br />Kekurangan:<br />- Tidak efektif jika ingin merubah elemen tertentu saja";
            break;
        case 3:
            text = "<b>Jelaskan kapan saat yang tepat menggunakan metode byClassName. Jelaskan kelebihan dan kekurangannya.</b><br />Metode getElementsByClassName mengembalikan kumpulan dari semua elemen yang ada di dokumen dengan nama kelas yang sudah ditentukan dalam bentuk objek HTMLCollection. Kumpulan elemen ini bisa diakses dengan nomor indeks. Indeks tersebut dimulai dari 0. Digunakan jika programmer ingin merubah banyak elemen dengan class yang sama.<br /><br />Kelebihan:<br />- Bisa digunakan untuk mengambil banyak elemen dengan class sama<br />- Elemen yang diambil dikumpulkan dalam bentuk array (dengan index)<br />Kekurangan:<br />- Tidak bisa mengambil elemen yang multiclass (memiliki class lebih dari 1)";
            break;
    }

    var wid = (page-1)*50;
    $("#pbar").css("width", wid + "%");
    $("#cardtext").html(text);
}

$("#btnnext").on("click", function() {
    page++;
    if (page > 3) page = 1;
    nextArticle(page);
});
$("#btnprev").on("click", function() {
    page--;
    if (page < 1) page = 3;
    nextArticle(page);
});
$("#tugas1page1").on("click", function() {
    page = 1;
    nextArticle(page);
});
$("#tugas1page2").on("click", function() {
    page = 2;
    nextArticle(page);
});
$("#tugas1page3").on("click", function() {
    page = 3;
    nextArticle(page);
});
