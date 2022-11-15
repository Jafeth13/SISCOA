import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesPeriodService } from '../services-period.service';
@Component({
  selector: 'app-see-period',
  templateUrl: './see-period.component.html',
  styleUrls: ['./see-period.component.css']
})
export class SeePeriodComponent implements OnInit {

  constructor(  private route: ActivatedRoute,
    public rest: ServicesPeriodService,
    private router: Router,) { }
periodData:any



;temp:any
  ngOnInit(): void {
    let idU =  localStorage.getItem("idUsuario") ;
    this.rest.get(this.route.snapshot.params['ID'],idU).subscribe((data: {}) => {     
      this.periodData = data;      
    });
  } 
  back() {
    this.router.navigate(['/periodList']);
  }
}
