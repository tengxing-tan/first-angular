import { Directive, inject, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomIf]',
})
export class CustomIfDirective {
  private templateRef = inject(TemplateRef);
  private viewContainerRef = inject(ViewContainerRef);

  @Input() appCustomIf!: boolean;
  ngOnInit() {
    this.viewContainerRef.clear();
    if (this.appCustomIf === true) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }
}
