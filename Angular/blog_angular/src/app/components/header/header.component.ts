import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  menu:string[]=['Home','Receitas','Caseirinhos','Pelo mundo','Contato']

}
