document.addEventListener('DOMContentLoaded', function() {
  let selectElement = document.querySelector('.language-select');

  if (selectElement) {
    selectElement.addEventListener('change', checkSelectedLang);
  }

  // Verificar a última seleção de idioma ao carregar a página
  let lastSelectedLang = localStorage.getItem('selectedLang');
  if (lastSelectedLang) {
    selectElement.value = lastSelectedLang;
    loadJSON(getJSONFilePath(lastSelectedLang));
  }
});

function checkSelectedLang() {
  let selectElement = document.querySelector('.language-select');
  let langSelected = selectElement.value;

  if (langSelected === 'en') {
    localStorage.setItem('selectedLang', langSelected);
    location.reload(); // Recarregar a página
    return;
  }

  let jsonFile = getJSONFilePath(langSelected);
  loadJSON(jsonFile);

  localStorage.setItem('selectedLang', langSelected);
}

function loadJSON(jsonFile) {
  fetch(jsonFile)
    .then(response => response.json())
    .then(data => {
      replaceWords(data);
    })
    .catch(error => {
      console.error('An error occurred while loading the JSON file:', error);
    });
}

function replaceWords(data) {
  let spanElements = document.querySelectorAll('span[id]');

  spanElements.forEach(span => {
    let translationKey = span.id;
    let translateWord = data[translationKey];

    if (translateWord) {
      span.textContent = translateWord;
    }
  });
}


function getJSONFilePath(langSelected) {
  switch (langSelected) {
    case 'pt-BR':
      return '../static/json/pt-br.json';

    default:
      return '';
  }
}
