import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { NavController } from '@ionic/angular';
import { Flashlight} from '@ionic-native/flashlight/ngx';
@Component({
  selector: 'app-batman',
  templateUrl: './batman.page.html',
  styleUrls: ['./batman.page.scss'],
})
export class BatmanPage implements OnInit {
  batmanAlias:string=" ";
  DceuData:any=[];

  constructor(private storage:Storage,private navCtrl:NavController, private flashlight: Flashlight) { }

  ngOnInit() {
   
  }

  Flashlights(){
   this.flashlight.toggle();
  }


  ionViewDidEnter(){
    this.storage.create()
    .then( ()=>{
     this.storage.get('batman')
     .then((batman)=>{
       this.batmanAlias = batman;
     }
     )
     .catch();
    })
    .catch();
  }

  //save nickname and redirect to home
SaveNickname()
{
this.storage.create()
.then(()=>{
this.storage.set("batman",this.batmanAlias)
.then( ()=>{
  this.navCtrl.navigateBack('/home');

})
.catch();
})
.catch();
}
}


