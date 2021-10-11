import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCustomerComponent } from './add-customer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    imports: [CommonModule,FontAwesomeModule],
    declarations: [
      AddCustomerComponent
    ],
    exports:[AddCustomerComponent]
})
export class AddCustomerModule {}
