import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({
    selector: '[highlight]'
})
export class HighlightDirective {
    @HostBinding('style.backgroundColor') bgColor;

    @HostListener('mouseenter') onMouseEnter() {
        this.bgColor = '#dddddd';
    };

    @HostListener('mouseleave') onMouseLeave() {
        this.bgColor = 'transparent';
    }
}