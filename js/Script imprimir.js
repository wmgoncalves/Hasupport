function downloadPDF() {
  const item = document.querySelector(".container");

  var opt = {
    margin: 0,
    filename: "myfile.pdf",
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };

  html2pdf().set(opt).from(item).save();
}
