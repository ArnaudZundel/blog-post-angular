import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  post1 = [
    {
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam doloremque quasi laboriosam officia laudantium inventore sit eum rem sunt, expedita natus accusamus quis possimus tenetur vitae at, quas impedit dolor.'   
    }
  ];

  post2 = [
    {
      title: 'Mon deuxième poste',
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam doloremque quasi laboriosam officia laudantium inventore sit eum rem sunt, expedita natus accusamus quis possimus tenetur vitae at, quas impedit dolor.'
    }
  ];

  post3 = [
    {
      title: 'Mon dernier poste',
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam doloremque quasi laboriosam officia laudantium inventore sit eum rem sunt, expedita natus accusamus quis possimus tenetur vitae at, quas impedit dolor.'
    }
  ];

}
