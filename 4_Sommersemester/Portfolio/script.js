let isDark = true;

if (localStorage.getItem("theme") === "light") {
    isDark = false;
    document.body.classList.add("light");
    document.getElementById("themeBtn").textContent = "🌙";
}

function changeTheme() {
    if (isDark) {
        // Switch to light
        isDark = false;
        document.body.classList.add("light");
        document.getElementById("themeBtn").textContent = "🌙";
        localStorage.setItem("theme", "light");
    } else {
        // Switch to dark
        isDark = true;
        document.body.classList.remove("light");
        document.getElementById("themeBtn").textContent = "☀️";
        localStorage.setItem("theme", "dark");
    }
}

const username = "esquze";

fetch("https://api.github.com/users/" + username)
    .then(function(response) {
        return response.json(); 
    })
    .then(function(user) {
        return fetch("https://api.github.com/users/" + username + "/repos?sort=updated&per_page=6")
            .then(function(response) {
                return response.json();
            })
            .then(function(repos) {
                showGithub(user, repos);
            });
    })
    .catch(function(error) {
        console.error("GitHub error:", error);
        document.getElementById("github-section").innerHTML = "<p class='gh-error'>Could not load GitHub profile.</p>";
    });

function showGithub(user, repos) {
    const card = document.getElementById("github-section");

    card.classList.add("loaded");

    card.innerHTML = `
        <div class="gh-header">
            <img class="gh-avatar" src="${user.avatar_url}" alt="avatar">
            <div>
                <div class="gh-name">${user.name || user.login}</div>
                <div class="gh-username">@${user.login}</div>
            </div>
        </div>

        <p class="gh-bio">${user.bio || "No bio yet."}</p>

        <div class="gh-stats">
            <div class="gh-stat">
                <strong>${user.public_repos}</strong>
                <span>Repos</span>
            </div>
            <div class="gh-stat">
                <strong>${user.followers}</strong>
                <span>Followers</span>
            </div>
            <div class="gh-stat">
                <strong>${user.following}</strong>
                <span>Following</span>
            </div>
        </div>

        <div class="gh-repos" id="repo-list"></div>
    `;

    const repoList = document.getElementById("repo-list");

    repos.forEach(function(repo) {
        const link = document.createElement("a");
        link.className = "gh-repo";
        link.href = repo.html_url;
        link.target = "_blank";
        link.innerHTML = `
            <div class="gh-repo-name">${repo.name}</div>
            <div class="gh-repo-desc">${repo.description || "No description"}</div>
        `;
        repoList.appendChild(link);
    });
}
