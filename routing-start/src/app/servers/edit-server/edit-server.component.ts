import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import {
  ActivatedRoute,
  CanDeactivate,
  CanDeactivateFn,
  Params,
  Router,
} from '@angular/router';
import { CanComponentDeactivate } from '../../can-deactivate-guard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css'],
})
export class EditServerComponent
  implements OnInit, CanDeactivate<CanComponentDeactivate>
{
  server: { id: number; name: string; status: string };
  serverName = '';
  serverStatus = '';
  allowedEdit: boolean = false;
  changesSaved: boolean;

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.server = this.serversService.getServer(+params['id']);
      this.serverName = this.server.name;
      this.serverStatus = this.server.status;
    });
    this.route.queryParams.subscribe((queryParams: Params) => {
      console.log(queryParams['allowEdit']);
      this.allowedEdit = queryParams['allowEdit'] === '1' ? true : false;
    });
    console.log(this.allowedEdit);
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus,
    });
    this.changesSaved = true;
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.allowedEdit) return;
    if (
      (this.serverName !== this.server.name ||
        this.serverStatus !== this.server.status) &&
      !this.changesSaved
    ) {
      return confirm('Do you want to discard the changes');
    } else {
      return true;
    }
  }
}
