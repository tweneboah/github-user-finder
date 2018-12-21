# github-use-rfinder

This is a mini project where you can search for a github user with their basic information

### Preview for update <https://tweneboah.github.io/github-user-finder/>

# PROCEDURES

## 1. Creation of GitHub classs

This class contains the properties and methods needed.
For the method, the main idea is to return a user object so I used a async/ await function of which i will pass a user. Asyn/ await function always return a promise. \*\*
\*\*
I used a fetch() api to get a response from the github url and this will always return json format so to be able use in javascript i have to conevrt them into object by using response.json()

##CODE DEMO

```javascript
class GithubUser {
  constructor() {
    this.client_id = "0913fbb1237ad714ea6d";
    this.client_secret = "90b9b14945849f0f8f912f3f4d1e52f8493f4341";
  }

  //This method will pull a user data using fetch() and it will return a JSON. format
  async getUser(users) {
    let profileResponse = await fetch(
      `https://api.github.com/users/${users}?client_id=${
        this.client_id
      }&client_secret=${this.client_secret}`
    );
    profileResponse = profileResponse.json();
    console.log(profileResponse);
  }
}

const getGithubUser = new GithubUser();
getGithubUser.getUser("tweneboah");
```
