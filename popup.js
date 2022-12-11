const getDate = document.getElementById("submit");
getDate.addEventListener("click",() => {
    // Manage links keys in storage
    if (!localStorage.getItem('linkInd'))
    {
        localStorage.setItem('linkInd', '0');
    }
    var linkInd = localStorage.getItem('linkInd')
    document.getElementById("debug").innerHTML = linkInd;
    // Add new link to link var
    var link = document.getElementById("addLink").value;
    
    // Save link to storage
    //localStorage.setItem(linkInd, link);
    chrome.storage.sync.set({[linkInd]: String(link)});

    // Save new link index into localStorage
    linkIndInt = parseInt(linkInd, 10);
    linkIndInt += 1;
    linkInd = String(linkIndInt);
    localStorage.setItem('linkInd', linkInd);

    // document.getElementById("debug").innerHTML = links;
})

const updateDate = document.getElementById("update");
updateDate.addEventListener("click",() => {
    // clearing textarea
    document.getElementById("linksTextArea").innerHTML = '';

    chrome.storage.sync.get(all => {
        for (const [key, link] of Object.entries(all)) {
            document.getElementById("linksTextArea").innerHTML += key + ' : ' + String(link) + "\n";
        }
    });
    // document.getElementById("debug").innerHTML = "HEllo";
})



const deleteByIdDate = document.getElementById("deleteByID");
deleteByIdDate.addEventListener("click",() => {

     localStorage.clear();
     chrome.storage.local.remove(["key"],function(){
        var error = chrome.runtime.lastError;
           if (error) {
               console.error(error);
           }
       })
    // document.getElementById("debug").innerHTML = "HElloDeleteAll";
})



const deleteAllDate = document.getElementById("deleleALL");
deleteAllDate.addEventListener("click",() => {
    chrome.storage.sync.clear();
    localStorage.clear();
    document.getElementById("debug").innerHTML = "HElloDeleteAll";
    chrome.storage.sync.set({compare: false});
})
