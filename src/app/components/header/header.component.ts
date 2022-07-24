import { Component, HostListener, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  theme: boolean = false;

  //themeButton: any;
  // darkTheme: string = 'dark-theme';
  // iconTheme: string = 'uil-sun';
  // selectedTheme: any = localStorage.getItem('selected-theme');
  // selectedIcon: any = localStorage.getItem('selected-icon');
  // currentTheme: string = '';
  // currentIcon: string = '';

  isMenuOpen: boolean = false;
  headerScroll: boolean = false;
  
  constructor() {}

  ngOnInit(): void {
    //this.addToLocalStorage();
    // this.themeButton = document.getElementById('theme-button');
    // if(this.selectedTheme){
    //   document.body.classList[this.selectedTheme === 'dark' ? 'add' : 'remove'](this.darkTheme);
    //   this.themeButton.classList[this.selectedIcon === 'uil-moon' ? 'add' : 'remove'](this.iconTheme);
    // }
  }

  @HostListener("window:scroll")

  onWindowScroll() {
    window.scrollY >= 80 ? this.headerScroll = true : this.headerScroll = false;
  }

  onToggle(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  /* Dark mode */

  // getCurrentTheme: any = () => this.currentTheme = document.body.classList.contains(this.darkTheme) ? 'dark' : 'light';
  // getCurrentIcon: any = () => this.currentIcon = this.themeButton.classList.contains(this.iconTheme) ? 'uil-moon' : 'uil-sun';

  // onChangeTheme() {
  //   document.body.classList.toggle(this.darkTheme);
  //   this.themeButton.classList.toggle(this.iconTheme);
  //   localStorage.setItem('selected-theme', this.currentTheme);
  //   localStorage.setItem('selected-icon', this.currentIcon);

  // }


  // addToLocalStorage(): void {
  //   if(localStorage.getItem('them-color') === 'dark') {
  //     this.theme === true;
  //     document.body.classList.toggle('dark-theme');
  //   } else {
  //     this.theme === false;
  //     localStorage.setItem('them-color', 'light');
  //   }
  // }

  swichTheme(): void {
    if(!this.theme) {
      document.body.classList.toggle('dark-theme');
      this.theme = !this.theme;
      //localStorage.setItem('them-color', 'dark');
    }else {
      document.body.classList.remove('dark-theme');
      this.theme = !this.theme;
      //localStorage.setItem('them-color', 'light');
    }
  }
}
