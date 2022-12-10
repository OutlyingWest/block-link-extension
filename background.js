// chrome.tabs.onUpdated.addListener(function (changeInfo) {
//     if(changeInfo.url != null) {
//         // Manage links keys in storage
//         if (!localStorage.getItem('linkInd'))
//         {
//             localStorage.setItem('linkInd', '0');
//         }
//         var linkInd = localStorage.getItem('linkInd')
//         document.getElementById("debug").innerHTML = linkInd;
//         // Add new link to link var
//         var link = "changeInfo.url"

        
//         // Save to storage
//         localStorage.setItem(linkInd, link);

//         // Save new link index into localStorage
//         linkIndInt = parseInt(linkInd, 10);
//         linkIndInt += 1;
//         linkInd = String(linkIndInt);
//         localStorage.setItem('linkInd', linkInd);
//     }
// });


chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
    console.log(tabs[0].url);

    // Manage links keys in storage
    if (!localStorage.getItem('linkInd'))
    {
        localStorage.setItem('linkInd', '0');
    }
    var linkInd = localStorage.getItem('linkInd')
    // Add new link to link var
    var link = tabs[0].url

    // Save to storage
    localStorage.setItem(linkInd, link);

    // Save new link index into localStorage
    linkIndInt = parseInt(linkInd, 10);
    linkIndInt += 1;
    linkInd = String(linkIndInt);
    localStorage.setItem('linkInd', linkInd);  
});


  
