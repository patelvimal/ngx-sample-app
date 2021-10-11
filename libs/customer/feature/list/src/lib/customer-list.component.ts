import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CustomerApiService } from '@ngx-sample-app/customer/data-access';
import { combineLatest, Observable } from 'rxjs';
import {
    debounceTime,
    distinctUntilChanged,
    map,
    startWith,
} from 'rxjs/operators';

import { Customer } from '@ngx-sample-workspace/shared/data-access/models';

@Component({
    selector: 'app-customer-list',
    templateUrl: './customer-list.component.html',
    styleUrls: ['./customer-list.component.scss'],
})
export class CustomerListComponent implements OnInit {
    customerSearchField: FormControl = new FormControl();
    customers$!: Observable<Customer[]>;
    getCustomers$!: Observable<Customer[]>;
    searchText$: Observable<string> =
        this.customerSearchField.valueChanges.pipe(
            startWith(''),
            debounceTime(400),
            distinctUntilChanged()
        );

    constructor(public customerApiService: CustomerApiService) {}

    ngOnInit(): void {
        this.getCustomers$ = this.customerApiService.getCustomers();
        this.getCustomers();
    }

    getCustomers() {
        this.customers$ = combineLatest([
            this.getCustomers$,
            this.searchText$,
        ]).pipe(
            map(([customers, searchText]) => {
                if (searchText) {
                    return customers.filter(
                        (customer:any) => customer.name?.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
                    );
                }
                return customers;
            })
        );
    }
}
