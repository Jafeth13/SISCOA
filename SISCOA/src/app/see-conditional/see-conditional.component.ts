import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ServiceConditionService } from '../service-condition.service';

@Component({
  selector: 'app-see-conditional',
  templateUrl: './see-conditional.component.html',
  styleUrls: ['./see-conditional.component.css']
})
export class SeeConditionalComponent implements OnInit {

  constructor(  public rest: ServiceConditionService,
    private route: ActivatedRoute,
    private router: Router) { }
    statusData:any
  ngOnInit(): void {
    let idU = localStorage.getItem('idUsuario');
    this.rest
      .get(this.route.snapshot.params['ID'], idU)
      .subscribe((data: {}) => {
        this.statusData = data;
      });
  }

}
