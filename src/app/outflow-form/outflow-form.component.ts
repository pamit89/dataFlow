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
      "asinreviewpriority": new FormControl(),
      "productcategory": new FormControl(),
      "audittypedecision": new FormControl(),
      "reviewday": new FormControl(),
      "reviewweek": new FormControl(),
      "reviewmonth": new FormControl(),
      "reviewermanagerlogin": new FormControl(),
      "outflowtype": new FormControl(),
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
