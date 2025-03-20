function addToCart(id_produk) {
  //   alert("Berhasil menambahkan produk ke keranjang");

  var jumlah_sekarang = $("#jml_item").text();
  var jml_baru = parseInt(jumlah_sekarang) + 1;
  $("#jml_item").text(jml_baru);
}
