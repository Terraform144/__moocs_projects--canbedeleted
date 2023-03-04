document.addEventListener("DOMContentLoaded", function() {
  var bouton = document.getElementById("bChange");
  bouton.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.querySelector(".product-title").textContent = "Nouveau contenu de la div !";'});
    });
  });
});
