import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminIndexComponent } from './Component/Admin/AdminIndex/admin-index/admin-index.component';
import { NavbarComponent } from './Component/Admin/AdminIndex/navbar/navbar.component';
import { MainSidebarComponent } from './Component/Admin/AdminIndex/main-sidebar/main-sidebar.component';
import { FooterComponent } from './Component/Admin/AdminIndex/footer/footer.component';
import { ContentHeaderComponent } from './Component/Admin/AdminIndex/content-header/content-header.component';
import { HomeComponent } from './Component/Admin/home/home.component';
import { UserHomeComponent } from './Component/User/user-home/user-home.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminIndexComponent,
    NavbarComponent,
    MainSidebarComponent,
    FooterComponent,
    ContentHeaderComponent,
    HomeComponent,
    UserHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
