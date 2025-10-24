import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { MatButtonModule } from '@angular/material/button';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule
  ],
  providers: [
    // place your Firebase configuration here
    provideFirebaseApp(() => initializeApp({
      "projectId": "angular-firebase-auth-26df4",
      "appId": "1:904672844081:web:6fd1ab0652448c572cf810",
      "storageBucket": "angular-firebase-auth-26df4.firebasestorage.app",
      "apiKey": "AIzaSyBScQ-1FWT65bCz09iH1tI5AeTOlYwbZrw",
      "authDomain": "angular-firebase-auth-26df4.firebaseapp.com",
      "messagingSenderId": "904672844081"
    })),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
