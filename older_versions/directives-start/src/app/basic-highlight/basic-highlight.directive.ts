import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
  selector: "[appBasicHighlight]",
})
export class BasiHightLightDirective implements OnInit {
  constructor(private elementeRef: ElementRef) {}

  ngOnInit() {
    this.elementeRef.nativeElement.style.backgroundColor = "green";
  }
}
