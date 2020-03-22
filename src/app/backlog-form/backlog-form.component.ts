import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-backlog-form',
  templateUrl: './backlog-form.component.html',
  styleUrls: ['./backlog-form.component.scss']
})
export class BacklogFormComponent implements OnInit {

  constructor() { }
  backlogForm;
  ngOnInit() {
    this.backlogForm = new FormGroup({
      "classname": new FormControl(),
      "marketplace": new FormControl(),
      "reviewstatus": new FormControl(),
      "asincatchdate": new FormControl(),
      "prioritycreatedate": new FormControl(),
      "workingstatus": new FormControl(),
      "asinreviewdate": new FormControl(),
      "productcategory": new FormControl(),
      "enforcementriskscore": new FormControl(),
      "csbriskscore": new FormControl(),
      "policyversionid": new FormControl()
    })
  }

  onSubmit() {
    alert(JSON.stringify(this.backlogForm.value));
    console.log(this.backlogForm.value);
  }

}
