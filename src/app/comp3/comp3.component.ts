import { Component, OnInit } from '@angular/core';
import { DataSharingService } from './../data-sharing.service';
@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {
  Component3Data:any ='';
  constructor(private dataSharingService: DataSharingService) {
    this.dataSharingService.SharingData.subscribe((res:any)=>{
      this.Component3Data = res;
    })
   }

   onSubmit(data:any){
    this.dataSharingService.SharingData.next(data.value);
   }
   

  ngOnInit(): void {
  }

}
