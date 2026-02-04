// tampilkan tahun sekarang
document.getElementById('year').textContent = new Date().getFullYear();

// CONFRIM DOWNLOAD RESUME
document.getElementById("resumeBtn").addEventListener("click", function (e) {
  e.preventDefault(); // cegah langsung download

  const confirmDownload = confirm("Apakah Anda ingin download resume ini?");

  if (confirmDownload) {
    window.location.href = "/cv.pdf"; // lanjut download
  }
});

// contoh penanganan form (placeholder)
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  // ambil data (bisa kirim ke server / API)
  var form = e.target;
  var data = {
    name: form.name.value,
    email: form.email.value,
    subject: form.subject.value,
    message: form.message.value
  };
  // sementara hanya tampilkan alert — ganti dengan fetch ke server saat siap
  alert('Pesan terkirim. Terima kasih, ' + data.name + '!');
  form.reset();
});
