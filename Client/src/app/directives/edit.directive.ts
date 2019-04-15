import {Directive, ElementRef, Renderer2, HostListener} from '@angular/core';
 
@Directive({
    selector: '[editTask]'
})
export class EditTaskDirective{
     
    constructor(private element: ElementRef, private renderer: Renderer2) {}
     
    @HostListener("click") onClick() {
        this.animateCSS('#' + this.element.nativeElement.id, 'jello', {});

       /* //check event (can be delete event click by emersion)
        let pId = this.element.nativeElement.parentElement.id;
        
        if (pId != "buttonDeleteTask") {
            this.animateCSS(".container", "jello", {})
        } */
        
    }

    animateCSS(element, animationName, callback) {
        const node = document.querySelector(element)
        node.classList.add('animated', animationName)
    
        function handleAnimationEnd() {
            node.classList.remove('animated', animationName)
            node.removeEventListener('animationend', handleAnimationEnd)
    
            if (typeof callback === 'function') callback()
        }
    
        node.addEventListener('animationend', handleAnimationEnd)
    }
}