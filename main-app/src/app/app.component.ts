import { Component, ViewChild, ViewContainerRef } from '@angular/core';

import { AddonService } from './addon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  @ViewChild('view', { read: ViewContainerRef })
  view: ViewContainerRef;

  @ViewChild('view2', { read: ViewContainerRef })
  view2: ViewContainerRef;

  constructor(private addonService: AddonService) {

  }

  load() {
    this.addonService.loadAddon('addon').then(cmpRef => {
      cmpRef.instance.config = {
        from: 'afd@test.com',
        apikey: 'dsfkjd'
      };
      cmpRef.instance.app = { test: 42 };
      this.view.insert(cmpRef.hostView);
    });
  }

  loadMaterial() {
    this.addonService.loadAddon('addon-material').then(cmpRef => {
      this.view2.insert(cmpRef.hostView);
    });
  }
}
