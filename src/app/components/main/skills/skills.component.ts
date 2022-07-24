import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  toggle: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClickArrow() {
    this.toggle = !this.toggle;
  }
}
