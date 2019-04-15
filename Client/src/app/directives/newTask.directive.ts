import {Directive, ElementRef, Renderer2, HostListener} from '@angular/core';
 
@Directive({
    selector: '[animateNewTask]'
})
export class AnimateNewTaskDirective{
     
    constructor(private element: ElementRef, private renderer: Renderer2) {}
     
    @HostListener("click") onClick() {
        this.animateCSS(".addButton", "jackInTheBox", {});
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