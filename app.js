//Instantiating github class
const getGithubUser = new GithubUser;

//Instantiating UI class
const ui = new UI;

//Search input
//Search input Listner

const input = document.querySelector("#searchUser");
input.addEventListener("keyup", (e) => {
    //get input text
    const userText = e.target.value;
    if (userText !== "") {
        //Make http call
        getGithubUser.getUser(userText).then((data) => {
            if (data.profile.message === "Not Found") {
                //show alert
            } else {
                //show profile
                ui.showProfile(data.profile)
            }
        })
    }
})



