import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-role-register',
  templateUrl: './role-register.component.html',
  styleUrls: ['./role-register.component.css']
})
export class RoleRegisterComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
  }

}
