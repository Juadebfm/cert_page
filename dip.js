// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Extract the certificate ID from the URL query parameter
  const urlParams = new URLSearchParams(window.location.search);
  const certificateId = urlParams.get("cert_id");

  // Get the error message element
  const errorMessageElement = document.getElementById("error_message");

  // Get the content containers for different course levels

  const diplomaLevelContainer = document.querySelector(".diploma-section");
  const mainBody = document.getElementById("mainBody");

  const download_dip = document.getElementById("download_dip");

  download_dip.style.display = "none";

  if (certificateId) {
    // Certificate ID is found in the URL

    // Hide the error message
    errorMessageElement.style.display = "none";

    // Construct the API URL with the certificate ID from the URL
    const apiUrl = `https://pluralcode.net/apis/v1/verify_certificate.php?cert_id=${certificateId}`;

    // Make an API call to the constructed URL
    fetch(apiUrl)
      .then((response) => response.json())
      .then((result) => {
        // Print the resulting data to the console
        console.log("API Response:", result);

        // Check if the "course_level" is "Diploma" (case-insensitive)
        const courseLevel = result.course_level;
        if (courseLevel === "Diploma") {
          // Render neccesary details
          // Get the course name from the API response
          const courseName = result.course_name.toLowerCase(); // Convert to lowercase for case-insensitive comparison

          // Define the mapping of keywords to school names
          const keywordToSchoolMap = {
            "product design": "Product School Diploma",
            "product management": "Product School Diploma",
            "agile project mgt": "Product School Diploma",
            "data analytics": "Data School Diploma",
            "business analytics": "Data School Diploma",
            "backend development": "Programming School Diploma",
            "frontend development": "Programming School Diploma",
            "cloud computing": "Cloud School Diploma",
            "cyber security": "Cloud School Diploma",
          };

          // Initialize the default school name
          let schoolName = "---";

          // Iterate over the keywords and check if any keyword is present in the course name
          for (const keyword in keywordToSchoolMap) {
            if (courseName.includes(keyword)) {
              schoolName = keywordToSchoolMap[keyword];
              break; // Exit the loop once a match is found
            }
          }

          const dip_school_b = document.getElementById("dip_school_b");
          dip_school_b.textContent = schoolName;

          const dip_school = document.querySelector(".dip_school");
          dip_school.textContent = schoolName;

          // Update content in the diploma container
          const dipFullName = document.getElementById("dip_student_name");
          const dipCourseName = document.getElementById("dip_course_name");
          const dipDay = document.getElementById("dip_day");
          const dipCertId = document.getElementById("dip_cert_id");

          download_dip.style.display = "block";

          dipFullName.textContent = result.full_name;
          dipCourseName.textContent = result.course_name;
          dipDay.textContent = result.date_issued;
          dipCertId.textContent = result.certificate_id;

          diplomaLevelContainer.style.display = "block";
        } else {
          // Invalid course level
          mainBody.innerHTML = "";

          // Display the error message
          errorMessageElement.textContent = "Error getting certificate";
          errorMessageElement.style.display = "block";
          mainBody.appendChild(errorMessageElement);
        }
      })
      .catch((error) => {
        console.error("API Error:", error);

        // Certificate ID is not found in the URL
        mainBody.innerHTML = "";

        // Display the error message
        errorMessageElement.textContent = "Certificate ID not found";
        errorMessageElement.style.display = "block";
        mainBody.appendChild(errorMessageElement);
      });
  } else {
    mainBody.innerHTML = "";

    errorMessageElement.textContent = "Certificate ID not found";
    errorMessageElement.style.display = "block";
  }
});
