# sample project for getting top 5 project for GitHub user

## Instructions

You need to have installed:

- NPM
- Node JS
- TypeScript 

run following from project location:

    npm install
    npm start <user-name>
    
Where `<user-name>` is name of GitHub user.   

If you use `Intellij` just create `npm configuration`. 
    
Example:    
    
    npm start octocat

Output:
    
    info for github user: octocat
    User {
      login: 'octocat',
      fullName: 'The Octocat',
      repoCount: 8,
      followerCount: 3072,
      repos: [
        Repo {
          name: 'Spoon-Knife',
          description: 'This repo is for demonstration purposes only.',
          url: 'https://github.com/octocat/Spoon-Knife',
          size: 1407736,
          forkCount: 110441
        },
        Repo {
          name: 'Hello-World',
          description: 'My first repository on GitHub!',
          url: 'https://github.com/octocat/Hello-World',
          size: 1,
          forkCount: 1422
        },
        Repo {
          name: 'linguist',
          description: "Language Savant. If your repository's language is being reported incorrectly, send us a pull request!",
          url: 'https://github.com/octocat/linguist',
          size: 32899,
          forkCount: 81
        },
        Repo {
          name: 'octocat.github.io',
          description: null,
          url: 'https://github.com/octocat/octocat.github.io',
          size: 335,
          forkCount: 81
        },
        Repo {
          name: 'hello-worId',
          description: 'My first repository on GitHub.',
          url: 'https://github.com/octocat/hello-worId',
          size: 160,
          forkCount: 57
        }
      ]
    }
    