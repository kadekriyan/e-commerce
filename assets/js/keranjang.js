let inp_jumlah = $("input[name=jumlah_beli]");
inp_jumlah.change(function () {
  updateSubtotal($(this));
});
function updateSubtotal(element) {
  let parent_td = element.parent();
  let parent_tr = parent_td.parent();
  let harga = parent_tr.find(".harga");
  let harga_int = parseInt(harga.text());
  let jumlah_beli = parent_tr.find("input[name=jumlah_beli]").val();
  let subtotal_new = harga_int * jumlah_beli;
  let subtotal_text = parent_tr.find(".subtotal");
  subtotal_text.text(subtotal_new);

  let nama_produk = parent_tr.find(".nama_produk").text();
  return (
    jumlah_beli +
    " " +
    nama_produk +
    " dengan total harga Rp " +
    subtotal_new +
    " Berhasil disimpan dikeranjang"
  );
}

let tombolSimpan = $(".updateCart");
tombolSimpan.click(function () {
  let pesan = updateSubtotal($(this));
  alert(pesan);
});

let tombolHapus = $(".hapusCart");
tombolHapus.click(function () {
  let parent_td = $(this).parent();
  let parent_tr = parent_td.parent();
  alert("Berhasil Hapus Item Keranjang");
  parent_tr.remove();
});
