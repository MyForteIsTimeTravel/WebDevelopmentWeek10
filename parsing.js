/* * * * * * * * * * * * * * * * * * * * * * * *
 *  Parsing.js
 *
 *  Front End Web Development - week 10
 *
 * * * * * * * * * * * * * * * * * * * * * * * */
(function(){
    let demoData  = document.getElementById("demo");
    let obj       = JSON.parse(jsonString);

    // bad
    /* for (var i = 0; i < obj.lecturers.length; i++) { ... } */
    
    // good
    obj.lecturers.forEach (function(item) {
        let thisName = `${item.firstName} ${item.lastName}`;
        let thisNode = document.createElement("P");
    
        // populates the chosen element's content with the data:
        thisNode.innerHTML = thisName;
        demoData.appendChild(thisNode);
    })
}());