import {Injectable} from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';
import  'rxjs/add/operator/map';
import {Router, ActivatedRoute, Params,} from '@angular/router';

@Injectable()

export class PostItemService {
    finalUrl : string;
    ref: string;
    constructor(private http: Http,private activatedRoute: ActivatedRoute) {
        console.log('PostItemService' );
    }

    getPosts( ) {
        this.activatedRoute.params.subscribe((params: Params) => {
        this.ref = params['id'];
        console.log("PostItemService activatedRoute.params",this.ref);
      });
 
       // var ref = 100001;
       if (this.ref) {
                return this.http.get('https://colossustest.herokuapp.com/api/items/'+this.ref+'.json').map (
                    res => res.json()
                );
       }
       
     }


}




