import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})

export class PostListItemComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;

  
  loveIt = 0;
  dontLoveIt = 0;
  lastUpdate = new Date();

  constructor() {

}

  ngOnInit() {
  }


  onLoveIt() {
    console.log(this.loveIt ++)

  }

  onDontLoveIt() {
    console.log(this.loveIt --)

  }

  getColor() {
    if(this.loveIt > this.dontLoveIt) {
      return 'green';
    } else if(this.dontLoveIt > this.loveIt) {
      return 'red';
    }
  }
}