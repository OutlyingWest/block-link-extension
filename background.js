chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {

    if(changeInfo.url != null) {

        alert(changeInfo.url);
    }
});