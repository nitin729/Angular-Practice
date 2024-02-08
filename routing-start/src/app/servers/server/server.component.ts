import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  server: { id: number; name: string; status: string };
  serverID: number;
  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    //Loading the server with route params
    /*  this.route.params.subscribe((params) => {
      console.log(typeof params['id']);
      this.serverID = +params['id'];
      this.server = this.serversService.getServer(this.serverID);
    }); */

    //Loading the server using Resolver.

    // rather than loading the component first and then loading the data required, resolve says, hey, let the required data be loaded first, and then once thats done, move ahead with completing the route for that component.

    this.route.data.subscribe((data) => {
      this.server = data['server'];
      this.serverID = this.server.id;
    });
  }
  editServer(id) {
    // this.router.navigate(['/servers', id, 'edit']); // Using relative path
    this.router.navigate(['edit'], {
      relativeTo: this.route,
      queryParamsHandling: 'preserve',
    });
  }
}
