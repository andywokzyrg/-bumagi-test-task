import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-tab-item',
    templateUrl: './tab-item.component.html',
    styleUrls: ['./tab-item.component.scss']
})
export class TabItemComponent implements OnInit {
    @Input() id: string | undefined
    @Input() for: string | undefined
    @Input() checked: boolean | undefined;
    @Input() value: string | undefined

    constructor() {
    }

    ngOnInit(): void {
    }

}
