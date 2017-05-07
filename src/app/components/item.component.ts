import {OnInit, Component } from '@angular/core';
import {PostItemService} from '../services/postitem.service'
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'item',
  moduleId: module.id,
  templateUrl: 'item.component.html',
  providers: [PostItemService]
})

export class ItemComponent  { 
  post: Post;

  constructor(private PostItemService: PostItemService, private activatedRoute: ActivatedRoute){
    this.post = {label:'',cost:'',brand:'',description:'',image:'',items_available:'',model:'',reference:''};
    this.PostItemService.getPosts().subscribe(post => {
        //console.log(post);
        this.post = post
        
    });
  }

 }
 
interface Post {
    label: string,
    cost: string,
    brand: string,
    description: string,
    image: string,
    items_available: string,
    model: string,
    reference: string
}
