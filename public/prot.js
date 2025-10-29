    document.getElementById("contactForm").addEventListener("submit", function(e) {
      e.preventDefault(); // stop page refresh
      
      let name = document.getElementById("name").value;
      let email = document.getElementById("email").value;
      let message = document.getElementById("message").value;

      // This opens the visitor’s email app
      window.location.href = `mailto:admin@example.com?subject=Message from ${name}&body=From: ${name} (${email})%0A%0A${message}`;
    });
  