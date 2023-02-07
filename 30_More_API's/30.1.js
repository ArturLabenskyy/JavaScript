const searchBtn = document.querySelector(`#search`);
const users = document.querySelector(`#users`);

searchBtn.addEventListener(`click`, getUser);

function getUser() {
    const userName = document.querySelector(`#user-id`).value;

    fetch(`https://api.github.com/users/${userName}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            const userCard = document.createElement(`div`);
            const avatar = document.createElement(`img`);
            const name = document.createElement(`h1`);
            const repo = document.createElement(`h3`);
            avatar.src = `${data.avatar_url}`;
            name.textContent = `${data.name}`;
            repo.textContent = `${data.public_repos}`;
            userCard.appendChild(avatar);
            userCard.appendChild(name);
            userCard.appendChild(repo);
            const pageLink = data.html_url;
            userCard.addEventListener(`click`, (e) => {
                window.open(pageLink, "_blank");
            });
            userCard.style.width = `30%`;
            users.appendChild(userCard);
        })
        .catch((err) => console.log(err));
}
