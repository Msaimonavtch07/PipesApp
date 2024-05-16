import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameLower: string = 'SAIMON...';
  public nameUpper: string = 'saimon...';
  public fullName: string = 'SaiMOn...';

  public custumDate: Date = new Date();

};
