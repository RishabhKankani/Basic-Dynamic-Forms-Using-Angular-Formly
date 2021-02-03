import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.scss']
})

export class SecondComponentComponent {
  form = new FormGroup({});
  options: FormlyFormOptions = {};
  model:any;
  fields: FormlyFieldConfig[] = [];
  constructor(private userService: UserService) {
    this.userService.getUserData().subscribe(([model, fields]) => {
      this.form = new FormGroup({});
      this.model = model;
      this.fields = this.mapFields(fields);
    });
  }


  mapFields(fields: FormlyFieldConfig[]) {
    return fields.map( f => {
      if (f.key === 'color') {
        f.type = 'radio';
        // @ts-ignore
        f.templateOptions.options = this.userService.getColors();
      }
      return f;
    });
  }

  submit() {
    if (this.form.valid) {
      console.log(this.model);
    }
  }
}
