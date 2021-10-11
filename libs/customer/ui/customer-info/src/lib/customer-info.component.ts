import { Component, Input, OnInit } from '@angular/core';
import {
    faApple,
    faBitbucket,
    faEbay,
    faEtsy,
    faFacebook,
    faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import {  IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-customer-info',
    templateUrl: './customer-info.component.html',
    styleUrls: ['./customer-info.component.scss'],
})
export class CustomerInfoComponent {
    private logos: IconDefinition[] = [
        faFacebook,
        faApple,
        faBitbucket,
        faEbay,
        faEtsy,
        faLinkedin
    ];

    @Input()
    customer: any;

    get border() {
        const border: any = {
            borderTop: `4px solid #${Math.floor(
                Math.random() * 0xffffff
            ).toString(16)}`,
        };
        return border;
    }

    get brandLogo(): IconDefinition {
        return this.logos[Math.floor(Math.random() * this.logos.length)];
    }
}
