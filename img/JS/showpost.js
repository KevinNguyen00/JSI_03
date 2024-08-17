let entire_container = document.getElementById("Depicts-container");
let html = ``;
posts.forEach((posts, index) => {
    html += `<div class="card" style="width: 18rem">
    <img src="${posts.img_url}" class="card-img-top" alt="..." />
    <div class="card-body">
        <div>
            <h5 class="name-user">${posts.name}</h5>
            <p>${posts.timestamp}</p>
        </div>
        <p class="card-text">${posts.content_url}</p>
        <a href="#" class="btn btn-primary"><i class="fa-solid fa-heart" style="color: #fcfdb4"></i></a>
    </div>
</div>`;
});
entire_container.innerHTML = html;

