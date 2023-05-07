import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  Info1: string[] = ["Kamil",'1',"k@m.com"]
  Info2: string[] = ["Yash",'2',"y@m.com"]
  Info3: string[] = ["Lalu",'3',"l@m.com"]

  GetInfo1(): string[]{
    return this.Info1
  }
  GetInfo2(): string[]{
    return this.Info2
  }
  GetInfo3(): string[]{
    return this.Info3
  }
  constructor() { }
}
