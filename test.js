// // document.addEventListener("DOMContentLoaded", function () {
// //   //////////////
// //   //////////////
// //   // document.querySelector('#btn-print').addEventListener('click', function () {
// //   // 	// window.print();

// //   // 	let wspFrame = document.getElementById('frame').contentWindow;
// //   // 	wspFrame.focus();
// //   // 	wspFrame.print();
// //   // });
// //   // //////////////
// //   // //////////////

// //   // document.querySelector('#btn-one').addEventListener('click', function () {
// //   // 	html2canvas(document.querySelector('#content')).then((canvas) => {
// //   // 		let base64image = canvas.toDataURL('image/png');
// //   // 		// console.log(base64image);
// //   // 		let pdf = new jsPDF('p', 'px', [1600, 1131]);
// //   // 		pdf.addImage(base64image, 'PNG', 15, 15, 1110, 360);
// //   // 		pdf.save('webtylepress-two.pdf');
// //   // 	});
// //   // });
// //   //////////////
// //   //////////////
// //   document.querySelector("#btn-two").addEventListener("click", function () {
// //     html2canvas(
// //       document
// //         .querySelector("iframe")
// //         .contentWindow.document.querySelector(".receipt-wrap")
// //     )
// //       .then((canvas) => {
// //         let base64image = canvas.toDataURL("image/png");
// //         // console.log(base64image);
// //         let pdf = new jsPDF("p", "px", [1600, 1151]);
// //         pdf.addImage(base64image, "PNG", 15, 15, 1140, 966);
// //         pdf.save("webtylepress-receipt.pdf");
// //       })
// //       .catch((error) => {
// //         console.log(error);
// //       });
// //   });
// //   //////////////
// //   //////////////
// // });

// document.addEventListener("DOMContentLoaded", function () {
//   // Get a reference to the download button
//   const downloadButton = document.getElementById("downloadButton");

//   // Add a click event listener to the button
//   downloadButton.addEventListener("click", function () {
//     // Replace 'url-of-the-other-page' with the actual URL of the page containing the file
//     const fileUrl =
//       "http://certtest.netlify.app/?cert_id=CERT/PLC/2023/795214";

//     // Make an HTTP request to fetch the file
//     fetch(fileUrl)
//       .then((response) => {
//         // Check if the response is OK (status code 200)
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }

//         // Extract the filename from the response headers
//         const contentDisposition = response.headers.get("content-disposition");
//         const filenameMatch = contentDisposition.match(/filename="(.+)"/);
//         const filename = filenameMatch ? filenameMatch[1] : "downloaded-file";

//         // Create a Blob from the response data
//         return response.blob().then((blob) => ({ blob, filename }));
//       })
//       .then(({ blob, filename }) => {
//         // Create an object URL for the Blob
//         const blobUrl = URL.createObjectURL(blob);

//         // Create a temporary anchor element to trigger the download
//         const a = document.createElement("a");
//         a.href = blobUrl;
//         a.download = filename;

//         // Programmatically click the anchor to trigger the download
//         a.click();

//         // Clean up the object URL
//         URL.revokeObjectURL(blobUrl);
//       })
//       .catch((error) => {
//         console.error("Error downloading the file:", error);
//       });
//   });
// });
