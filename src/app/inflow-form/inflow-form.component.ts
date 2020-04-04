import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-inflow-form',
  templateUrl: './inflow-form.component.html',
  styleUrls: ['./inflow-form.component.scss']
})
export class InflowFormComponent implements OnInit {

  constructor() { }
  inflowForm;
  ngOnInit() {
    this.inflowForm = new FormGroup({
      "asincatchdate": new FormControl(),
      "inflowyw": new FormControl(),
      "inflowym": new FormControl(),      
      "class": new FormControl(),
      "workingstatus": new FormControl(),
      "asicreviewpriority": new FormControl(),
      "productcategory": new FormControl(),     
      "policytype": new FormControl(),
      "enforcementriskscore": new FormControl(),
      "csbriskscore": new FormControl(),
      "policyentityid": new FormControl(),
      "marketplace": new FormControl(),
      "node": new FormControl(),
      "inflow": new FormControl()
    })
  }
  onSubmit() {
    alert(JSON.stringify(this.inflowForm.value));
    console.log(this.inflowForm.value);
  }
}
