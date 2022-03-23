let article = document.querySelectorAll(".article")

article.forEach(posts => posts.addEventListener("click", () => {
    posts.classList.toggle("active")
}))