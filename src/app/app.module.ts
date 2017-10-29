import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

export const firebaseConfig = {
  apiKey: "AIzaSyA9zcSSYse_5X7HQl9fPQHIR20rPN-3MkI",
    authDomain: "chatapp-45e1b.firebaseapp.com",
    databaseURL: "https://chatapp-45e1b.firebaseio.com",
    projectId: "chatapp-45e1b",
    storageBucket: "",
    messagingSenderId: "900541506712"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
