function submitForm() {
    const form = document.getElementById("believerForm");
    const formData = new FormData(form);
  
    let output = "✨ Your Form Submission ✨\n\n";
    formData.forEach((value, key) => {
      output += `${key}: ${value}\n`;
    });
  
    alert(output);
  }
  