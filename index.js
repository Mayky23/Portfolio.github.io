function openPDF() {
    var pdfWindow = window.open('', '_blank');
    pdfWindow.document.write("<iframe width='100%' height='100%' src='CV.pdf'></iframe>");
  }