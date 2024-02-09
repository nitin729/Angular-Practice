import { Component } from '@angular/core';
import { CommonService } from '../common.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-github',
  standalone: true,
  imports: [],
  templateUrl: './github.component.html',
  styleUrl: './github.component.scss',
})
export class GithubComponent {
  constructor(private commonService: CommonService) {}
  githubUsers: any;
  githubUsersSub!: Subscription;
  ngOnInit() {
    this.githubUsersSub = this.commonService
      .getGithubUsers()
      .subscribe((users) => {
        this.githubUsers = users;
      });
  }
  ngOnDestroy() {
    this.githubUsersSub.unsubscribe();
  }
}
