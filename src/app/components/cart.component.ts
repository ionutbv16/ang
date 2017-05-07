import {OnInit, Component } from '@angular/core';
import {PostItemService} from '../services/postitem.service'
import {PostCheckoutService} from '../services/postcheckout.service'
import {Router, ActivatedRoute, Params} from '@angular/router';
import { Cookie } from 'ng2-cookies';


@Component({
  selector: 'cart',
  moduleId: module.id,
  templateUrl: 'cart.component.html',
  providers: [PostItemService, PostCheckoutService]
})

export class CartComponent  { 
  name : string;
  item : string;
  total_cost: number;
  total_items: number;
  qty : number;
  total : number;
  cookies: Object;
  keys: Array<string>;
  hobbies: string[];
  showHobbies: boolean;
  post: Post;
  itemsTotalItems: number;
  checkName: string;
  cartItems: Array<Object>;
  itemFound : boolean;
  cValue: Object;
  itemsForCheckout: Array<string>;
  idParam: string;

  constructor(private PostItemService: PostItemService, private activatedRoute: ActivatedRoute, private PostCheckoutService: PostCheckoutService){
    this.name = 'Changed name';
    this.qty = 1;
    this.checkName = 'cname';
    this.cartItems = [];
    this.checkCookie();
    if(this.getCartItems()) this.cartItems = JSON.parse(this.getCartItems());

    this.activatedRoute.params.subscribe((params: Params) => {
        this.idParam = params['id'];
        console.log("this.idParam",this.idParam);
      });
 
      if (this.idParam) {
          this.PostItemService.getPosts().subscribe(post => {
              //console.log("post",post);
              this.post = post;
              this.post.qty = 1;
              // FLAG TO GET DUPLICATE REFERENCE IN BASKET
              this.itemFound = false;
              //console.log("Add item ", this.post);
              for (var i=0 ; i < this.cartItems.length ; i++) {
                        if (this.cartItems[i]["reference"] === post["reference"]  ) {
                          //  
                          this.itemFound = true;
                        }
              }
              if (this.itemFound == false) {
                    this.cartItems.push(this.post);
                    //console.log("new item added ", this.post);
              }
              this.addCookie('cart', this.cartItems ) ;

          });
      }
      this.getTotalProducts ();
      this.addCookie('cart', this.cartItems) ;
      //console.log("Cart Items ", this.cartItems);
      
 }

 getCartItems() {
    if (Cookie.get('cart')) {
        return  Cookie.get('cart');
     }
 }

 update() {
    this.cookies = Cookie.getAll();
    this.keys = Object.keys(this.cookies);
  }

  addCookie(cName: string, cValue: Object) {
    var days: number;
    var path: string;
    var domain: string;
    days = 1;
    path='/' ;
    days = days*24*60*60*1000;
    var expires = new Date(Date.now() + days);
    Cookie.set(cName, JSON.stringify(cValue), expires, path, domain);
  }

  checkCookie() {
     console.log(Cookie.get('cname')) ; 
  }
   
  refreshCart (item: string, qty: number) {
        this.total = 0;
        for (var i=0 ; i < this.cartItems.length ; i++) {
                    if (this.cartItems[i]["reference"] === item  ) {
                      // UPDATE WITH THE NEW QUANTITY
                      this.cartItems[i]["qty"]=qty;
                    }
              }
        this.getTotalProducts ();      
        this.addCookie('cart', this.cartItems ) ;
  }  

    deleteCart (item: string) {
        this.total = 0;
        console.log('delete cart', item) ; 
        for (var i=0 ; i < this.cartItems.length ; i++) {
             if (this.cartItems[i]["reference"] === item  ) {
               // DELETE THE ITEM
                this.cartItems.splice(i, 1);
            }
        }
        this.getTotalProducts ();  
        this.addCookie('cart', this.cartItems ) ;
        
  }  

  getTotalProducts () {
      this.itemsTotalItems = 0 ;
      this.total = 0; 
      this.itemsForCheckout = [];
      for (var i=0 ; i < this.cartItems.length ; i++) {
          this.itemsTotalItems += parseInt(this.cartItems[i]["qty"]);
          this.total += this.cartItems[i]["qty"] *  this.cartItems[i]["cost"];
          this.itemsForCheckout.push(this.cartItems[i]["reference"]);
      }
  }

   checkoutCart () {
        let parameter = JSON.stringify({total_cost:this.total, total_items:this.itemsTotalItems, items_ref:this.itemsForCheckout});
        this.PostCheckoutService.getPost(parameter).subscribe(post => {
             console.log('checkoutCart', post);
        });
  }  


}
 
interface Post {
    label: string,
    cost: string,
    qty: number
     
}
