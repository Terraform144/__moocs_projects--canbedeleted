// In the file popup.js of the chrome extension
function updateTime() {
    // Get the current date and time
    var date = new Date();
    
    // Format the time as hh:mm:ss
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    
    // Add leading zeros if needed
    if (hours < 10) hours = '0' + hours;
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;
  
     // Display the time in the popup
     document.getElementById("time").textContent = hours + ':' + minutes + ':' + seconds;
  }
  
  // Update the time every second
  setInterval(updateTime,1000);