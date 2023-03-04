// Fonction pour modifier le contenu de la div avec la classe 'product-title'
function modifierContenu() {
    // Récupération de la div avec la classe 'product-title'
    let divs = document.getElementsByClassName('product-title');
    if (divs.length > 0) {
      let div = divs[0];
      // Modification du contenu de la div
      div.textContent = 'Nouveau contenu de la div testtest';
    }
  }
  
  // Fonction pour injecter le code dans la page
  function injecterCode(tabId, changeInfo, tab) {
    // Vérification que le changement est sur la page active
    if (tab.active && changeInfo.status === 'complete') {
      // Injection du code dans la page
      chrome.scripting.executeScript({
        target: { tabId: tabId },
        function: modifierContenu
      });
    }
  }
  
  // Ecouteur d'événement pour détecter le chargement de la page
  chrome.tabs.onUpdated.addListener(injecterCode);