window.onload = function () {
  document.getElementById("download_dip").addEventListener("click", () => {
    const invoice = this.document.getElementById("invoice");
    console.log(invoice);
    console.log(window);
    var opt = {
      filename: "myfile.pdf",
      image: { type: "png", quality: 0.98 },
      html2canvas: {
        scale: 2,
      },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
    html2pdf().from(invoice).set(opt).save();
  });
  //   document.getElementById("download_cert").addEventListener("click", () => {
  //     const invoice = this.document.getElementById("invoice_cert");
  //     console.log(invoice);
  //     console.log(window);
  //     var opt = {
  //       filename: "myfile.pdf",
  //       image: { type: "png", quality: 0.98 },
  //       html2canvas: {
  //         scale: 2,
  //       },
  //       jsPDF: { unit: "px", orientation: "landscape" },
  //     };
  //     html2pdf().from(invoice).set(opt).save();
  //   });
  // };
};
