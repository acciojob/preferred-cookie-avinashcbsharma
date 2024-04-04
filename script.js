//your JS code here. If required.

      document.addEventListener("DOMContentLoaded", function() {
        const preferencesForm = document.getElementById("preferencesForm");

        // Function to save preferences in cookies
        function savePreferences() {
          const fontSize = document.getElementById("fontsize").value;
          const fontColor = document.getElementById("fontcolor").value;
          document.body.style.fontSize = fontSize + "px";
          document.body.style.color = fontColor;

          // Save preferences in cookies
          document.cookie = `fontsize=${fontSize}; max-age=31536000`; // Cookie expires in 1 year
          document.cookie = `fontcolor=${fontColor}; max-age=31536000`; // Cookie expires in 1 year
        }

        // Function to load preferences from cookies
        function loadPreferences() {
          const cookies = document.cookie.split("; ");
          const preferences = {};
          cookies.forEach(cookie => {
            const [key, value] = cookie.split("=");
            preferences[key] = value;
          });

          if (preferences.fontsize) {
            document.body.style.fontSize = preferences.fontsize + "px";
            document.getElementById("fontsize").value = preferences.fontsize;
          }

          if (preferences.fontcolor) {
            document.body.style.color = preferences.fontcolor;
            document.getElementById("fontcolor").value = preferences.fontcolor;
          }
        }

        // Load preferences when the page loads
        loadPreferences();

        // Event listener for form submission
        preferencesForm.addEventListener("submit", function(event) {
          event.preventDefault();
          savePreferences();
        });
      });