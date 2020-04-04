import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-outflow-form',
  templateUrl: './outflow-form.component.html',
  styleUrls: ['./outflow-form.component.scss']
})
export class OutflowFormComponent implements OnInit {

  constructor() { }
  outflowForm;
  ngOnInit() {
    this.outflowForm = new FormGroup({
      "class": new FormControl(),
      "asin_priority": new FormControl(),
      "product_category": new FormControl(),
      "enforcement_risk_score": new FormControl(),
      "csb_risk_score": new FormControl(),
      "audittype": new FormControl(),
      "decision": new FormControl(),
      "manager_id": new FormControl(),
      "reviewday": new FormControl(),
      "reviewweek": new FormControl(),
      "reviewmonth": new FormControl(),      
      "outflowtype": new FormControl(),
      "bulktype": new FormControl(),
      "neiflag": new FormControl(),
      "marketplace": new FormControl(),
      "node": new FormControl(),
      "org": new FormControl(),
      "sla": new FormControl(),
      "outflow": new FormControl()
    })
  }

  onSubmit() {
    alert(JSON.stringify(this.outflowForm.value));
    console.log(this.outflowForm.value);
  }

}
