let windowId = 0;
const CONTEXT_MENU_ID = 'example_context_menu';

function closeIfExist() {
  if (windowId > 0) {
    chrome.windows.remove(windowId);
    windowId = chrome.windows.WINDOW_ID_NONE;
  }
}

const b64toBlob = (b64Data, contentType='', sliceSize=512) => {
  const byteCharacters = atob(b64Data);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);

    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }

  const blob = new Blob(byteArrays, {type: contentType});
  return blob;
}

function popWindow(type) {
  closeIfExist();
  const options = {
    type: 'popup',
    left: 100,
    top: 100,
    width: 800,
    height: 475,
  };
  if (type === 'open') {
    options.url = 'window.html';

    chrome.tabs.captureVisibleTab({format: 'png', quality: 100}, function(image) {
      chrome.storage.local.set({
        state: JSON.stringify({image})
      }, function() {
        chrome.windows.create(options, (win) => {
          windowId = win.id;
        });
      });
    });
  }
}

chrome.contextMenus.create({
  id: CONTEXT_MENU_ID,
  title: 'JiraShot',
  contexts: ['all']
});

chrome.contextMenus.onClicked.addListener((event) => {
  if (event.menuItemId === CONTEXT_MENU_ID) {
    popWindow('open');
  }
});