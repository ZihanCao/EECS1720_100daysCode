chrome.contextMenus.create({
    type:"normal",
    title:"search your selection in Wikipedia",
    contexts:["selection","link"],
    onclick:function(info){
        window.open("https://en.wikipedia.org/wiki/"+info.selectionText)
    }
},
function(){

})