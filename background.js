// console.log("Hello\n");
// chrome.tabs.query({}, function(tabs){
//     // console.log(tabs[0].url);
//     chrome.storage.sync.set({url: tabs[0].url});
//     // Add new link to link var
//     var linkActive = tabs[0].url;
//     chrome.storage.sync.get(all => {
//         for (const [key, link] of Object.entries(all)) {
//             if (String(linkActive) === String(link)) {
//                 chrome.storage.sync.set({compare: true});
//             }
//         }
//     });
// });


// chrome.tabs.onCreated.addListener(function (tab) {
//     chrome.tabs.query({
//         currentWindow: true,
//         active: true,
//         lastFocusedWindow: true,
//     }, function (tabs) {
//         chrome.storage.sync.set({compare: true});
//         for (let i = 0; i < tabs.length; i++) {
//             chrome.storage.sync.set({url: tabs[i].url});
//           }
//         var linkActive = tabs[0].url;
//         chrome.storage.sync.get(all => {
//             for (const [key, link] of Object.entries(all)) {
//                 if (String(linkActive) === String(link)) {
//                     chrome.storage.sync.set({compare: true});
//                 }
//             }
//         });
//     });
// });


chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    chrome.storage.sync.set({tabId: [tabId]});
    // chrome.storage.sync.set({taburl: [tab.url]});
    tabId = Number(tabId);

    chrome.storage.sync.get(all => {
        for (const [key, link] of Object.entries(all)) {
            if (String(tab.url) === String(link)) {
            chrome.tabs.remove(tabId);
            chrome.storage.sync.set({compare: true});
            }
        }
    });
});


// , function (tab) {
//     chrome.tabs.remove(tab.id);
// }
// chrome.tabs.discard(tabId);


// url: "https://translate.yandex.ru/*",
// var activeTabId; currentWindow: true, active: true, lastFocusedWindow: true 

// chrome.tabs.onActivated.addListener(function(activeInfo) {
//   activeTabId = activeInfo.tabId;
// });

// function getActiveTab(callback) {
// chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
//     var tab = tabs[0];

//     if (tab) {
//       callback(tab);
//     } else {
//       chrome.tabs.get(activeTabId, function (tab) {
//         if (tab) {
//           callback(tab);
//         } else {
//           console.log('No active tab identified.');
//         }
//       });

//     }
//   });
// }


  
