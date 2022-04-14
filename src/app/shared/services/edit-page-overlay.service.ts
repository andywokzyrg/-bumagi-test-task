import {Injectable} from "@angular/core";
import {ComponentPortal} from "@angular/cdk/portal";
import {EditPageComponent} from "../../edit-page/edit-page.component";
import {Overlay, OverlayConfig, OverlayRef} from "@angular/cdk/overlay";

interface EditPageOverlayConfig {
    panelClass?: string;
    hasBackdrop?: boolean;
    backdropClass?: string;
}

const DEFAULT_CONFIG: EditPageOverlayConfig = {
    hasBackdrop: true,
    backdropClass: 'dark-backdrop',
    panelClass: 'tm-file-preview-dialog-panel'
}

@Injectable({providedIn: 'root'})
export class EditPageOverlayService {
    constructor(private overlay: Overlay) { }
    overlayRef!: OverlayRef

    private getOverlayConfig(config: EditPageOverlayConfig): OverlayConfig {
        const positionStrategy = this.overlay.position()
            .global()
            .centerHorizontally()
            .centerVertically();

        const overlayConfig = new OverlayConfig({
            hasBackdrop: config.hasBackdrop,
            backdropClass: config.backdropClass,
            panelClass: config.panelClass,
            scrollStrategy: this.overlay.scrollStrategies.block(),
            positionStrategy
        });

        return overlayConfig;
    }

    private createOverlay(config: EditPageOverlayConfig) {
        const overlayConfig = this.getOverlayConfig(config);
        return this.overlay.create(overlayConfig);
    }

    open(config: EditPageOverlayConfig = {}) {
        const dialogConfig = { ...DEFAULT_CONFIG, ...config };
        this.overlayRef = this.createOverlay(dialogConfig);
        const editPagePortal = new ComponentPortal(EditPageComponent);

        this.overlayRef.attach(editPagePortal);
    }

    close() {
        this.overlayRef.dispose()
    }
}
