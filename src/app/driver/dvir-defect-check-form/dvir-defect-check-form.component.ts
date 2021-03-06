import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dvir-defect-check-form',
  templateUrl: './dvir-defect-check-form.component.html',
  styleUrls: ['./dvir-defect-check-form.component.css']
})
export class DvirDefectCheckFormComponent implements OnInit {
  value: Date;
  public details: any = [];
  public roadSideInspection = false;
  cancelMsg = false;
  successMsg = false;
  constructor() { }

  ngOnInit() {
  }
addMore() {
  this.details.push({
    'a': '3',
    'b': '3',
    'c': '2'
  });
}
removeEle(index: any) {
  this.details.splice(index, 1);
  console.log(this.details);
}
roadSideInspectionReq(flag: boolean) {
  this.roadSideInspection = flag;
  console.log(this.roadSideInspection);
}
showDialog(action: any) {
    switch (action) {
      case 'cancel':
        this.successMsg = false;
        this.cancelMsg = true;
        break;
      case 'submit':
        this.cancelMsg = false;
        this.successMsg = true;
        break;
    }
}
}
