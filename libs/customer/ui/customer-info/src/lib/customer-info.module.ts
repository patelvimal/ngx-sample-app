import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerInfoComponent } from './customer-info.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [CommonModule,FontAwesomeModule ],
  declarations: [
    CustomerInfoComponent
  ],
  exports:[
    CustomerInfoComponent
  ]
})
export class CustomerInfoModule {}
