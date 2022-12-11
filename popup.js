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
    // Get all links from sync storage
    chrome.storage.sync.get(all => {
        for (const [key, link] of Object.entries(all)) {
            document.getElementById("linksTextArea").innerHTML += key + ' : ' + String(link) + "\n";
        }
    });
    document.getElementById("debug").innerHTML = "links updated";
})



const deleteByIdDate = document.getElementById("deleteByID");
deleteByIdDate.addEventListener("click",() => {
    // Get id for delete from popur.html
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
    // Clear sync google storage
    chrome.storage.sync.clear();
    // Clear a local storage
    localStorage.clear();
    document.getElementById("debug").innerHTML = "all links deleted";
})
