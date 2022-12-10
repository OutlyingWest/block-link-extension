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
    
    // Save to storage
    localStorage.setItem(linkInd, link);

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
    // Output all links to textarea
    for(var key in localStorage){
        if(localStorage.hasOwnProperty(key) && key !== "linkInd") {
            document.getElementById("linksTextArea").innerHTML += '  ' + key + ' : ' + localStorage.getItem(key) + "\n";
        }
     }
    // document.getElementById("debug").innerHTML = "HEllo";
})



const deleteByIdDate = document.getElementById("deleteByID");
deleteByIdDate.addEventListener("click",() => {

     localStorage.clear();
    // document.getElementById("debug").innerHTML = "HElloDeleteAll";
})



const deleteAllDate = document.getElementById("deleleALL");
deleteAllDate.addEventListener("click",() => {
     localStorage.clear();
    document.getElementById("debug").innerHTML = "HElloDeleteAll";
})
