import { Component } from '@angular/core';
import { RecordsService } from 'src/app/records.service';

@Component({
  selector: 'app-emp-info',
  templateUrl: './emp-info.component.html',
  styleUrls: ['./emp-info.component.css'],
  providers:[RecordsService]
})
export class EmpInfoComponent {
InfoReceived1:string[]=[];
InfoReceived2:string[]=[];
InfoReceived3:string[]=[];

getinforecclass1(){
  this.InfoReceived1 = this.rserv.GetInfo1()
}
getinforecclass2(){
  this.InfoReceived2 = this.rserv.GetInfo2()
}
getinforecclass3(){
  this.InfoReceived3 = this.rserv.GetInfo3()
}
constructor (private rserv: RecordsService){

}
}
