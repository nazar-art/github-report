import * as request from "request";
import {User} from "../model/User";
import {Repo} from "../model/Repo";

const OPTIONS: any = {
    headers: {
        'User-Agent': 'request'
    },
    json: true
}

export class GithubApiService {

    getUserInfo(userName: string, callBack: (user: User) => any) {
        request.get('https://api.github.com/users/' + userName,
            OPTIONS,
            (error: any, response: any, body: any) => {
                // console.log(error);
                // console.log(response);
                // console.log(body);
                let user = new User(body);
                // console.log(user);
                callBack(user);
            });
    }

    getRepos(userName: string, callBack: (repos: Repo[]) => any) {
        request.get('https://api.github.com/users/' + userName + '/repos',
            OPTIONS,
            (error: any, response: any, body: any) => {
                // map each object from array as new repo
                let repos = body.map((repo: any) => new Repo(repo));
                callBack(repos);
            });
    }
}