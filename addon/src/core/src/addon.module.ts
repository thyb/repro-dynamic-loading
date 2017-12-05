// External modules
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
// Angular CDK
// Angular material
import { MatButtonModule } from "@angular/material";

// Components and directives
import { AddonViewComponent } from "./components";

@NgModule({
	imports: [
		// Angular modules
		CommonModule,

		// Material modules
		MatButtonModule,
	],
	exports: [AddonViewComponent],
	declarations: [AddonViewComponent],
	entryComponents: [AddonViewComponent],
	providers: []
})
export class AddonModule {
	static getViewComponent() {
		return AddonViewComponent;
	}
}