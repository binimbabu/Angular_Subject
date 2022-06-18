import { Component, OnInit } from '@angular/core';
import { DataSharingService } from './../data-sharing.service';
@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  Component1Data : any= '';
  constructor(private dataService : DataSharingService) {
    this.dataService.SharingData.subscribe((res:any)=>{
      this.Component1Data = res;
    })
   }

  ngOnInit(): void {
  }

  onSubmit(data)
  {
    this.dataService.SharingData.next(data.value);
  }
}
