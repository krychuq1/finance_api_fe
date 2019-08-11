import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MyMaterialModule} from './app-material.module';
import { HeaderComponent } from './components/header/header.component';
import {LoginComponent} from './dialogs/login/login.component';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ToastrModule} from 'ngx-toastr';
import {SocketIoConfig, SocketIoModule} from 'ngx-socket-io';
import {environment} from '../environments/environment';
import {AssetBoxComponent} from './components/asset-box/asset-box.component';
import {CryptoComponent} from './components/crypto/crypto.component';
import {MetalComponent} from './components/metal/metal.component';
import {StockComponent} from './components/stock/stock.component';
import {CurrencyComponent} from './components/currency/currency.component';

const config: SocketIoConfig = { url: environment.apiUrl, options: {} };
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    AssetBoxComponent,
    CryptoComponent,
    MetalComponent,
    StockComponent,
    CurrencyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    SocketIoModule.forRoot(config),
    MyMaterialModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent],
  entryComponents: [LoginComponent]
})
export class AppModule { }
