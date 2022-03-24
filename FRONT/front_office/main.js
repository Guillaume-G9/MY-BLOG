let main = document.querySelector("main")


let data = []

function display(data){
    for(posts of data) 
    
    main.innerHTML += `
    <div class="article" data-id="${posts._id}" data-uid="${posts.uid}">
        <button class="delete">SUPPRIMER</button>
        <button class="change">MODIFIER</button>
        <div class="article-header">
            <h2 contenteditable="true" >${posts.title}</h2>
        <p><span class="posted">Posté le:</span> ${posts.createdAt}</p>
        </div>
        <div class="article-content">
            <p contenteditable="true" >${posts.content}</p>
        </div>
    </div>
    ` 
}

async function getPosts(url) {
    const response = await fetch(url);
    const data = await response.json();
    display(data)
}


getPosts("http://localhost:5000/posts")


let article = document.querySelectorAll(".article")

article.forEach(posts => posts.addEventListener("click", () => {
    posts.classList.toggle("active")
}))

main.addEventListener("click", (e) => {
   
    

    if(e.target.className === "delete") {

        fetch(`http://localhost:5000/posts/${e.target.parentNode.dataset.id}`, {
        
        method: 'DELETE'})

        .then(res => res.text()) // or res.json()
        .then(res => console.log(res))

    } else if(e.target.className === "change") {


        const blocArticle = {
            "title": e.target.parentNode.childNodes[5].childNodes[1].textContent,
            "content": e.target.parentNode.childNodes[7].textContent, 
        }

        fetch(`http://localhost:5000/posts/${e.target.parentNode.dataset.id}`, {
       
        method: "PUT",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(blocArticle)})

        .then(res => res.text()) // or res.json()
        .then(res => console.log(res))

    }
})
