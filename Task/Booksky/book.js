var addbook= document.getElementById("add")

addbook.addEventListener("click", function(event){
    let title=document.getElementById("title").value
    let author=document.getElementById("author").value
    let description=document.getElementById("description").value
    let container=document.querySelector(".container")
    
    event.preventDefault()
    let div=document.createElement("div")
    div.setAttribute("class", "book-container")
    div.innerHTML=`<h2>${title}</h2>
     <h4>${author}</h4>
     <p>${description}</p>
     <button onclick="deletebook(event)" id="delete">Delete</button>`
     container.append(div)
     popupshow.style.display="none"
    popupadd.style.display="none"
    
})



var popup=document.getElementById("add-popup")
var popupshow=document.getElementById("popup")
var popupadd=document.getElementById("add-items")

popup.addEventListener("click",function(event){
    
    popupshow.style.display="block"
    popupadd.style.display="block"
})

var cancel=document.getElementById("cancel")

cancel.addEventListener("click", function(){
    event.preventDefault()
    popupshow.style.display="none"
    popupadd.style.display="none"
})

function deletebook(event){
    var deletebooks=document.getElementById("delete")
    event.target.parentElement.remove()
}

