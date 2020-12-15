import { Component, OnInit, ElementRef } from '@angular/core';


@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})

export class PopupComponent implements OnInit {

  constructor(private element: ElementRef) { }
  
    ngOnInit() {
        // we added this so that when the backdrop is clicked the modal is closed.


        this.element.nativeElement.addEventListener('click', ()=> {
            this.close()
        })
    }
    
    close() {
        this.element.nativeElement.classList.remove('sshow')
        this.element.nativeElement.classList.add('hhidden')
    }


}
