import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserContactFormComponent } from './user-contact-form.component';


@NgModule( {
	declarations: [
		UserContactFormComponent
	],
	exports: [
		UserContactFormComponent
	],
	imports: [
		CommonModule
	]
})
export class UserContactFormModule { }
