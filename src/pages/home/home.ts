import { Component } from '@angular/core';
import {GitHubService} from '../../services/github';

@Component({
    templateUrl: 'home.html',
    providers: [GitHubService]
})
export class HomePage {
    public foundRepos;
    public username;

    constructor(public github: GitHubService) {
    }

    getRepos(){
      this.github.getRepos(this.username).subscribe(
        data => {
          this.foundRepos = data.json();
        },
        err => console.error(err),
        () => console.log('getRepos completed')
      );
    }
}
