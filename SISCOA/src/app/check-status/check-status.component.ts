import { Component, OnInit } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';

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
    domain: ['#f00', '#0f0', '#0ff'],
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


constructor() {
     //Object.assign(this, { single })
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
