import { NgModule } from '@angular/core';

import { BoutiqueenligneSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [BoutiqueenligneSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [BoutiqueenligneSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class BoutiqueenligneSharedCommonModule {}
