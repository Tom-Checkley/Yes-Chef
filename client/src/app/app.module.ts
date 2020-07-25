import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PageComponent } from './pages/_page-templates/page/page.component';
import { HomeComponent } from './pages/home/home.component';
import { RecipesComponent } from './components/recipes/recipes/recipes.component';
import { BannerComponent } from './components/banner/banner.component';
import { NavComponent } from './components/nav/nav.component';
import { SectionComponent } from './components/section/section.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RecipesComponent,
    BannerComponent,
    PageComponent,
    SectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
