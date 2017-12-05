import { Component, OnInit } from "@angular/core";

@Component({
	selector: "materia-addon-view",
	template: `<button mat-button (click)="alert()">TEST</button>`
})
export class AddonViewComponent implements OnInit {
	constructor() {}

	ngOnInit() {}

	alert() {
		window.alert("it works!");
	}
}
