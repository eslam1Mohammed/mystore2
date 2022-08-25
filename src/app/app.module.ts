import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule,FormGroupName} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ShopingCardComponent } from './shoping-card/shoping-card.component';
import { ProdactPageComponent } from './prodact-page/prodact-page.component';
import { HttpClientModule } from '@angular/common/http';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { observable, Observable } from 'rxjs';
import { ProdectElementComponent } from './prodect-element/prodect-element.component';
import { ComformComponent } from './comform/comform.component';
const appRout :Routes=
[
  {path:"",redirectTo:"prodact-page",pathMatch:"full"},
  {path:"prodact-page",component:ProdactPageComponent},
  {path:"shoping-card",component:ShopingCardComponent},
  {path:"prodect-element",component:ProdectElementComponent},
  {path:"comform",component:ComformComponent}
]

@NgModule({
  declarations:[
    AppComponent,
    NavbarComponent,
    ShopingCardComponent,
    ProdactPageComponent,
    ProdectElementComponent,
    ComformComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRout),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
