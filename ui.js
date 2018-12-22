
//UI Class
class UI {
    constructor() {
        this.profile = document.getElementById("profile");
    }

    //profile function
    showProfile(user) {
        this.profile.innerHTML = `
       <div class = "card card-body mb-3">
            <div class = "row">
                <div class = "col-md-3">
                <img class = "img-fluid mb-2" src = "${user.avatar_url}" > View Profile </img>
                <a href = "${user.html_url}" target = "_blank" class = "btn btn-primary btn-block">View Profile</a>

                
                </div>
                
            </div>
       </div>
       <div class = "col-md-9">
         <span class ="badge badge-primary">Public Repository: ${user.public_repos}</span>
         <span class = "badge badge-primary"> Followers: ${user.followers}</span>
         <span class = "badge badge-primary" > Following: ${user.following}</span>
         <span class = "badge badge-primary" > Gist: ${ user.gists} </span>  
       </div>`
    }
}