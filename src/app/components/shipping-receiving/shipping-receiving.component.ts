import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shipping-receiving',
  templateUrl: './shipping-receiving.component.html',
  styleUrls: ['./shipping-receiving.component.scss']
})
export class ShippingReceivingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.addEventListener('resize', () => {
      if (window.matchMedia('(max-width: 480px)')) {
        document.getElementById('open-side-nav-btn').innerHTML = '<mat-icon>menu</mat-icon>';
      } else {
        document.getElementById('open-side-nav-btn').innerHTML = 'Select Forms';
      }
    });
  }

}
