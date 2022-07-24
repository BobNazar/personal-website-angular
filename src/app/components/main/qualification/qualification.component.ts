import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.scss']
})
export class QualificationComponent implements OnInit {

  activeWork: boolean = false;

  activeEducation: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  onOpenWork() {
    this.activeWork = true;
    this.activeEducation = false;
  }
  
  onOpenEducation() {
    this.activeEducation = true;
    this.activeWork = false;
  }
}
