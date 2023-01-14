function saveState(state) {
  chrome.storage.local.set({ state: JSON.stringify(state) });
}

// todos unmarked count
function setBadge(todos) {
  if (chrome.browserAction) {
    const count = todos.filter(todo => !todo.marked).length;
    chrome.browserAction.setBadgeText({ text: count > 0 ? count.toString() : '' });
  }
}

export const saveJiraClient = (obj) => {
  chrome.storage.local.set({ jiraClient: obj });
}

export const getJiraClient = () => {
  return new Promise(resolve => {
    chrome.storage.local.get(['jiraClient'], async (result) => {
      resolve(result.jiraClient || null)
    })
  })
}

export default function () {
  return next => (reducer, initialState) => {
    const store = next(reducer, initialState);
    store.subscribe(() => {
      const state = store.getState();
      saveState(state);
      setBadge(state.todos);
    });
    return store;
  };
}
