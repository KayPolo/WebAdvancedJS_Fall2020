import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menu = ['item one', 'item two', 'item three'];




  constructor() { }


  myFunction = ()=>{
    console.log('Click');
    
  }

  showDialog(){
    let closeModal  = document.getElementById('project-modal')
   closeModal.classList.remove('hhidden')
   closeModal.classList.add('sshow');
  }
  
  closeDialog() {
      let closeModal  = document.getElementById('project-modal')
      closeModal.classList.remove('sshow')
      closeModal.classList.add('hhidden');
  }



  ngOnInit() {
  }

}
