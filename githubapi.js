//Class for gihub user objects and methods
class GithubUser {
    constructor() {
        this.client_id = "0913fbb1237ad714ea6d";
        this.client_secret = "90b9b14945849f0f8f912f3f4d1e52f8493f4341"
    }

    //This method will pull a user data using fetch() and it will return a JSON. format
    async getUser(users) {
        let profileResponse = await fetch(`https://api.github.com/users/${users}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
        profileResponse = profileResponse.json();
        console.log(profileResponse)
    }

}

const getGithubUser = new GithubUser;
getGithubUser.getUser("tweneboah")