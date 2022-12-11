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
    chrome.storage.sync.set({[linkInd]: String(link)});
    document.getElementById("debug").innerHTML = "new link with id: " + linkInd +" added";
    // Save new link index into localStorage
    linkIndInt = parseInt(linkInd, 10);
    linkIndInt += 1;
    linkInd = String(linkIndInt);
    localStorage.setItem('linkInd', linkInd);
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
    document.getElementById("debug").innerHTML = "links updated";
})



const deleteByIdDate = document.getElementById("deleteByID");
deleteByIdDate.addEventListener("click",() => {
    var id = document.getElementById("forDeleteId").value;
     chrome.storage.sync.remove([id],function(){
        var error = chrome.runtime.lastError;
           if (error) {
               console.error(error);
           }
       })
    if (id) {
        document.getElementById("debug").innerHTML = "link with id: " + id + " deleted";
    } else {
        document.getElementById("debug").innerHTML = "id for delete is not set";
    }
})



const deleteAllDate = document.getElementById("deleleALL");
deleteAllDate.addEventListener("click",() => {
    chrome.storage.sync.clear();
    localStorage.clear();
    chrome.storage.sync.set({compare: false});
    document.getElementById("debug").innerHTML = "all links deleted";
})
