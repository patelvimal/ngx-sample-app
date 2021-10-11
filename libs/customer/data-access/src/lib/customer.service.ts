import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Customer } from '@ngx-sample-workspace/shared/data-access/models';

const mockData = <Customer[]>[
    {
        name: 'GreenStore LLC.',
        address: '123, Main St. Philadelphia, PA, 19147',
        email: 'sample@demo.com',
        owner: 'John Snow',
    },
    {
        name: 'Infinite Flame',
        address: '123, Main St. Philadelphia, PA, 19147',
        email: 'sample@demo.com',
        owner: 'John Snow',
    },
    {
        name: 'Microsoft Corp.',
        address: '123, Main St. Philadelphia, PA, 19147',
        email: 'sample@demo.com',
        owner: 'John Snow',
    },
    {
        name: 'Facebook Inc.',
        address: '123, Main St. Philadelphia, PA, 19147',
        email: 'sample@demo.com',
        owner: 'John Snow',
    },
    {
        name: 'Think Company',
        address: '123, Main St. Philadelphia, PA, 19147',
        email: 'sample@demo.com',
        owner: 'John Snow',
    },
    {
        name: 'Penn Medicine',
        address: '123, Main St. Philadelphia, PA, 19147',
        email: 'sample@demo.com',
        owner: 'John Snow',
    },
    {
        name: 'Twitter',
        address: '123, Main St. Philadelphia, PA, 19147',
        email: 'sample@demo.com',
        owner: 'John Snow',
    },
    {
        name: 'Tesla Inc.',
        address: '123, Main St. Philadelphia, PA, 19147',
        email: 'sample@demo.com',
        owner: 'John Snow',
    },
];

@Injectable({
    providedIn: 'root',
})
export class CustomerApiService {

    getCustomers(): Observable<Customer[]> {
        return of(mockData);
    }
}
