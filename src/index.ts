import {GithubApiService} from './service/GithubApiService'
import * as _ from 'lodash';
import {User} from "./model/User";
import {Repo} from "./model/Repo";


let apiService = new GithubApiService();

if (process.argv.length < 3) {
    console.log("Please pass the username as an argument !!!");

} else {

    let userName: string = process.argv[2];
    console.log('TOP 5 projects for GitHub user: ' + userName);

    apiService.getUserInfo(userName, (user: User) => {
        apiService.getRepos(userName, (repos:  Repo[]) => {
            // sort by forks
            let sortedRepos = _.sortBy(repos, [(repo: Repo) => repo.forkCount * -1]);
            // takes top 5 repos
            user.repos = _.take(sortedRepos, 5);

            console.log(user);
        });
    });
}


