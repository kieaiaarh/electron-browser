document.addEventListener('DOMContentLoaded', () => {
  const webview = document.getElementById('webview');
  const reloadButton = document.getElementById('reload');
  const backButton = document.getElementById('back');
  const forwardButton = document.getElementById('forward');
  const favoriteButton = document.getElementById('favorite');
  const urlbar = document.getElementById('urlbar');
  const favList = document.getElementById('fav-list');

  webview.addEventListener('load-commit', ({ url, isMainFrame }) => {
    if (isMainFrame) {
      urlbar.value = url;
    }
  });

  urlbar.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      webview.setAttribute('src', urlbar.value);
    }
  });

  reloadButton.addEventListener('click', () => {
    webview.reload();
  });

  backButton.addEventListener('click', () => {
    webview.goBack();
  });
  
  forwardButton.addEventListener('click', () => {
    webview.goForward();
  });
  
  favoriteButton.addEventListener('click', () => {
    const listItem = document.createElement('li');
    const listContent = document.createElement('p');
    listItem.setAttribute('class', "list-group-item");
    listItem.setAttribute('data-url', urlbar.value);
    listContent.textContent = urlbar.value;
    listItem.appendChild(listContent);
    favList.appendChild(listItem);
    listItem.addEventListener('click', () => {
      const url = listItem.getAttribute('data-url');
      webview.setAttribute('src', url);
    });
  });
});