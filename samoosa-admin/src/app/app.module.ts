import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AngularFireFunctionsModule } from '@angular/fire/compat/functions';
import { AuthComponent } from './components/auth/auth.component';
import { AuthService } from './services/auth.service';
import { AngularFireModule } from '@angular/fire/compat';
import { DashComponent } from './shared/layouts/dash/dash.component';
import { ProductComponent } from './page/product/product.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    DashComponent,
    ProductComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    AngularFireFunctionsModule
  ],
  providers: [AuthService],
    bootstrap: [AppComponent]
})
export class AppModule { }
