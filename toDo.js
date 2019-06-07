chrome.storage.sync.set({ tasks: value }, function() {
  console.log('Value is set to ' + value);
});
