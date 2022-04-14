import {Component, Input, OnInit} from '@angular/core';
import {User} from "../shared/interfaces";
import {EditPageOverlayService} from "../shared/services/edit-page-overlay.service";


@Component({
    selector: 'app-edit-page',
    templateUrl: './edit-page.component.html',
    styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {
    @Input() user!: User

    constructor(private overlay: EditPageOverlayService) {
    }

    closeOverlay() {
        this.overlay.close()
    }

    ngOnInit(): void {
    }
}
