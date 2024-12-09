const posts_container = document.querySelector(".posts_container") as HTMLDivElement

interface Post{
    id: number,
    title: string,
    body: string
}


// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(res => res.json())
//     .then(data => {
//
//         console.log(data)
//
//         posts_container.innerHTML = `
//         <div class="posts">
//         <h3> Nr ${data.id}</h3>
//         <h3> Title: ${data.title}</h3>
//         <p>${data.body}</p>
//         </div>
//         `
//
//     })









