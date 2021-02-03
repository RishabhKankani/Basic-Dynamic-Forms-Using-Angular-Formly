import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})

export class FirstComponentComponent {
  form = new FormGroup({});
  model = {  firstname: '', lastname: '', email: '', Number: '', address: '' , password: '', passwordConfirm: ''};

  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {

      validators: {
        validation: [
          {name: 'fieldMatch', options: {errorPath: 'passwordConfirm'}},
        ],
      },

      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-3',
          key: 'firstname',
          type: 'input',
          templateOptions: {
            appearance: 'fill',
            label: 'First Name',
            placeholder: 'Enter First Name',
            minLength: 4,
            required: true,
          }
        },
        {
          className: 'col-3',
          key: 'lastname',
          type: 'input',
          templateOptions: {
            appearance: 'fill',
            label: 'Last Name',
            placeholder: 'Enter Last Name',
            minLength: 4,
            required: true,
          }
        },
        {
          className: 'col-3',
          key: 'Gender',
          type: 'radio',
          templateOptions: {
            appearance: 'fill',
            label: 'Gender',
            placeholder: 'Placeholder',
            required: true,
            options: [
              { value: 'Male', label: 'Male' },
              { value: 'Female', label: 'Female' },
              { value: 'Other', label: 'Other' }
            ],
          },
        },
      ],
    },

    {
      fieldGroupClassName: 'row',
        fieldGroup: [
        { className: 'col-3',
          key: 'email',
          type: 'input',
          templateOptions: {
            appearance: 'fill',
            label: 'Email: ',
            placeholder: 'Enter Email',
            required: true,
          }
        },
          { className: 'col-3',
            key: 'Number',
            type: 'input',
            templateOptions: {
              appearance: 'fill',
              label: 'Mobile (+91)',
              placeholder: 'Enter Contact Number',
              maxLength: 10,
              minLength: 10,
              required: true
            }
          },
          { className: 'col-3',
            key: 'Address',
            type: 'input',
            templateOptions: {
            appearance: 'fill',
            label: 'Address',
            placeholder: 'Enter Address',
            maxLength: 100,
            required: true
          }
        },
        ],
    },
    {
      fieldGroupClassName: 'row',
      fieldGroup: [

        { className: 'col-3',
          key: 'password',
          type: 'input',
          templateOptions: {

            appearance: 'fill',
            type: 'password',
            label: 'Password',
            placeholder: 'Must be at least 3 characters',
            required: true,
            minLength: 4,
          },
        },
        { className: 'col-3',
          key: 'passwordConfirm',
          type: 'input',
          templateOptions: {
            appearance: 'fill',
            type: 'password',
            label: 'Confirm Password',
            placeholder: 'Please re-enter your password',
            minLength: 4,
            required: true,
          }
        }

      ],
    },
];

  onSubmit() {
    if (this.form.valid)
    {
    console.log(this.model);
    }
    else {
      alert('Please fill valid details');
    }
  }
}
