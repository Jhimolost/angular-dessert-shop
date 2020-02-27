import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TasksService } from './services/tasks.service';
import { ExcelService } from './services/excel.service';
import { AppComponent } from './app.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { HttpClientModule }    from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ContainerComponent } from './components/container/container.component';
import { HeaderComponent } from './components/container/header/header.component';
import { FooterComponent } from './components/container/footer/footer.component';
import { MainComponent } from './components/container/main/main.component';
import { AboutComponent } from './components/container/about/about.component';
import { ShopCartComponent } from './components/container/shop-cart/shop-cart.component';
import { ShopListComponent } from './components/container/shop-list/shop-list.component';
import { ShopItemComponent } from './components/container/shop-list/shop-item/shop-item.component';
import { LoginComponent } from './components/container/login/login.component';
import { NotFoundComponent } from './components/container/not-found/not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import {MatDialogModule} from '@angular/material';
import {MatCardModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'about', component: AboutComponent },
  { path: 'shop-cart', component: ShopCartComponent },
  { path: 'shop-list', component: ShopListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'product-details/:id', component: ShopItemComponent },
  { path: 'not-found', component: NotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    AboutComponent,
    ShopCartComponent,
    ShopListComponent,
    ShopItemComponent,
    LoginComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,
    Ng2SmartTableModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes
    ),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyArdpL1XeV7JR5HmzK9CT0C3Rp55u5npgk'
    }),
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [TasksService, ExcelService],
  bootstrap: [AppComponent,]
})
export class AppModule { }
