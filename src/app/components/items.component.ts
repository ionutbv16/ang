import { Component } from '@angular/core';
import {PostsService} from '../services/post.service'

@Component({
  selector: 'items',
  moduleId: module.id,
  templateUrl: 'items.component.html',
  providers: [PostsService]
})

export class ItemsComponent  { 
  posts: Array<Object>;

  constructor(private postsService: PostsService){
    this.postsService.getPosts().subscribe(posts => {
        console.log(posts);
        this.posts = posts;

    });
  }
 
}

