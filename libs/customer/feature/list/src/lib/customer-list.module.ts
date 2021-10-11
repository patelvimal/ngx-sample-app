import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from './customer-list.component';
import { CustomerInfoModule } from '@ngx-sample-app/customer/ui/customer-info';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddCustomerModule} from '@ngx-sample-workspace/customer/ui/add-customer';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CustomerInfoModule,
        AddCustomerModule
    ],
    declarations: [CustomerListComponent],
    exports: [CustomerListComponent],
})
export class CustomerListFeatureModule {}
