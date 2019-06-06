import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BoutiqueenligneSharedLibsModule, BoutiqueenligneSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [BoutiqueenligneSharedLibsModule, BoutiqueenligneSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [BoutiqueenligneSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BoutiqueenligneSharedModule {
  static forRoot() {
    return {
      ngModule: BoutiqueenligneSharedModule
    };
  }
}
