function getData() {
  const params = new URLSearchParams(window.location.search);
  let getId = params.get("cert_id");

  const getName = document.getElementById("cert_student_name");
  const getCourseName = document.getElementById("cert_course_name");
  const getCourseDate = document.querySelector(".cert_date_issued");

  console.log(getId);

  const itemMethod = {
    method: "GET",
  };

  const url = `https://pluralcode.net/apis/v1/verify_certificate.php?cert_id=CERT/PLC/2023/795214`;
  fetch(url, itemMethod)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      getName.innerHTML = `${result.full_name}`;
      getCourseName.innerHTML = `${result.course_name}`;
      getCourseDate.innerHTML = `${result.date_issued}`;
    })
    .catch((error) => console.log("error", error));
}

function downloadPDF() {
  let element = document.getElementById("mainBody"); // Replace with the ID of the HTML element you want to convert
  html2pdf(element);
}
