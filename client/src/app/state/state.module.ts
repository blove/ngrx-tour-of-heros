import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { EffectsModule } from "@ngrx/effects";
import { RouterStateSerializer, StoreRouterConnectingModule } from "@ngrx/router-store";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../../environments/environment";
import { AppEffects } from "./app.effects";
import { appMetaReducers, appReducer } from "./app.reducer";
import { CustomSerializer } from "./shared/utils";

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(appReducer, {
      metaReducers: appMetaReducers
    }),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([
      AppEffects
    ]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  declarations: []
})
export class StateModule {

  constructor(@Optional() @SkipSelf() parentModule: StateModule) {
    if (parentModule) {
      throw new Error(
        'StateModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: StateModule,
      providers: [
        {
          provide: RouterStateSerializer,
          useClass: CustomSerializer
        }
      ]
    };
  }

}
