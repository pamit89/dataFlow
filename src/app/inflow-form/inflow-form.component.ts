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
      "inflowywinflowym": new FormControl(),
      "potentialclass": new FormControl(),
      "createdate": new FormControl(),
      "workingstatus": new FormControl(),
      "asicreviewpriority": new FormControl(),
      "productcategory": new FormControl(),
      "actionclientname": new FormControl(),
      "policytype": new FormControl(),
      "enforcementriskscore": new FormControl(),
      "csbriskscore": new FormControl(),
      "policyentityid": new FormControl(),
      "marketplacenode": new FormControl(),
      "inflow": new FormControl()
    })
  }
  onSubmit() {
    alert(JSON.stringify(this.inflowForm.value));
    console.log(this.inflowForm.value);
  }
}
