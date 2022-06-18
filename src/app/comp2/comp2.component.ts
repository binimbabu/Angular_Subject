import { Component, OnInit } from '@angular/core';
import { DataSharingService } from './../data-sharing.service';
@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  Component2Data : any ='';
  constructor(private dataSharingService : DataSharingService) {
    this.dataSharingService.SharingData.subscribe((res:any)=>{
      this.Component2Data = res;
    })
   }

   onSubmit(data:any){
     this.dataSharingService.SharingData.next(data.value);
   }

  ngOnInit(): void {
  }

}
