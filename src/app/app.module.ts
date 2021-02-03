import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule } from '@angular/common/http';
import { AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule }  from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import {UserService} from './second-component/user.service';

export function minlengthValidationMessages({err, field}: { err: any, field: any }) {
  return `Should have atleast ${field.templateOptions.minLength} characters`;
}
export function fieldMatchValidator(control: AbstractControl) {
  const { password, passwordConfirm } = control.value;

 if (!passwordConfirm || !password) {
    return null;
  }

  if (passwordConfirm === password) {
    return null;
  }
  return { fieldMatch: { message: 'Password Not Matching' } };
}

@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormlyBootstrapModule,
    MatRadioModule,
    MatCardModule,
    MatSelectModule,

    FormlyModule.forRoot({
      validators: [
        { name: 'fieldMatch', validation: fieldMatchValidator },
      ],
      validationMessages: [
        { name: 'required', message: 'This field is required' },
        { name: 'minlength', message: 'validateMinLength' },
        { name: 'maxlength', message: 'validateMaxLength' },]
    }),
    NgbModule,
    FormlyModule.forRoot({ extras: { lazyRender: true } }),
    FormlyMaterialModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
