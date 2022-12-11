// Callback function resdondes by tab update event
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    // Type conversion to int
    tabId = Number(tabId);
    // Get all links from sync storage
    chrome.storage.sync.get(all => {
        for (const [key, link] of Object.entries(all)) {
            // URL-links comared by strict comparison (maybe will be changed to regexp or analog in future)
            if (String(tab.url) === String(link)) {
            // Remove browser tab by id
            chrome.tabs.remove(tabId);
            }
        }
    });
});


  
