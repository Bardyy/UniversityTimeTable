import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AngularFireModule } from '@angular/fire';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontendComponent } from './frontend/frontend.component';
import { BackendComponent } from './backend/backend.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginpageComponent } from './loginpage/loginpage.component'
import { FirebaseService } from './services/firebase.service';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AUPComponent } from './aup/aup.component';
import { DMCAComponent } from './dmca/dmca.component';
import { AdminComponent } from './admin/admin.component'

@NgModule({
  declarations: [
    AppComponent,
    FrontendComponent,
    BackendComponent,
    LoginpageComponent,
    PrivacyPolicyComponent,
    AUPComponent,
    DMCAComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCrOjkLuzJ8js8dNrnggEuYYwGoy3Lr2IM",
      authDomain: "testing12345-d4a3e.firebaseapp.com",
      databaseURL: "https://testing12345-d4a3e.firebaseio.com",
      projectId: "testing12345-d4a3e",
      storageBucket: "testing12345-d4a3e.appspot.com",
      messagingSenderId: "811787705800",
      appId: "1:811787705800:web:df4c41452211248845b4fd"
    }),
    BrowserAnimationsModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }