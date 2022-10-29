import { Color, ScaleType } from '@swimlane/ngx-charts';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../auth.service';
import { Component, Input, OnInit } from '@angular/core';
import { ServiceUserService } from '../service-user.service';
@Component({
  selector: 'app-check-status',
  templateUrl: './check-status.component.html',
  styleUrls: ['./check-status.component.css']
})
export class CheckStatusComponent  {
  
  view: [number, number]=[500,200];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  colorScheme: Color = {
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#FFC300', '#000000', '#0ff'],
  };


    single = [
    {
      "name": "Asignado",
      "value": 34
    },
    {
      "name": "No asignado",
      "value": 55
    }
  ];
  single2 = [
    {
      "name": "Tareas",
      "value": 34
    },
    {
      "name": "Asistencia",
      "value": 32
    }
  ];
  single3 = [
    {
      "name": "Tareas",
      "value": 55
    },
    {
      "name": "Reunion",
      "value": 24
    }
  ];
  single4 = [
    {
      "name": "Tareas",
      "value": 8
    },
    {
      "name": "Gira",
      "value": 3
    }
  ];
userData:any

  constructor(private route:ActivatedRoute,private router:Router,public auth:AuthService,public restUser: ServiceUserService   ) {
this.rut();
   }

   rut(){
    this.restUser.get(this.route.snapshot.params['ID']).subscribe((data: {}) => {
      console.log(data);
      this.userData = data;    
    });
  }
  

  onSelect(data:any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data:any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data:any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
