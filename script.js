var gitprojects = document.querySelector(".container")

fetch("https://api.github.com/users/{username}/repos").then(
    response => {
        if(response.ok){
            return response.json()
        }else{
            console.log(response.statusText)
        }
    }
).then(result => {
    console.log(result)
    for(var i=0; i< result.length; i++){
        if(result[i].stargazers_count !== 0){
            var proj = `<div class="projects-container">
                            <div class="header">
                                <img src=${`https://raw.githubusercontent.com/{username}/${result[i].name}/${result[i].default_branch}/Thumbnail/thumbnail.png`} alt="thumbnail" class="src">
                            </div>
                            <div class="title"><strong>${result[i].name}</strong></div>
                            <div class="description">${result[i].description}</div>
                            <div class="links">
                                <a href="https://github.com/{username}/${result[i].name}" target="_blank">Github Repo</a>
                                <a href="https://{username}.github.io/${result[i].name}" target="_blank">Website</a>
                            </div>
                        </div>`
            gitprojects.insertAdjacentHTML('beforeend', proj);
        }
    }
}).catch(err => console.log(err))

