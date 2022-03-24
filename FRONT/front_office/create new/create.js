let artTitle = document.querySelector("h2")
let artContent = document.querySelector("p")
let sendButton = document.querySelector("button")




sendButton.addEventListener("click", () => {
    
    let uid = false
    if(localStorage.getItem("userID")){
        uid = localStorage.getItem("userID")
    }
    
    const blocArticle = {
        "title": artTitle.innerText,
        "content": artContent.innerText,
        "uid":uid,
    }
    // console.log(blocArticle)
    fetch("http://localhost:5000/posts/create",
    {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(blocArticle)
    })
    .then(function(res){ return res.json()})
    .then(function(res){ localStorage.setItem("userID", res.uid)})
    .catch(function(res){ console.log(res) })
})


