import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainComponent } from './main/main.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ImprintComponent } from './imprint/imprint.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { MySkillsComponent } from './main/my-skills/my-skills.component';
import { AboutMeComponent } from './main/about-me/about-me.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { DescriptionAboutMeComponent } from './description-about-me/description-about-me.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { FooterComponent } from './footer/footer.component';







@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ImprintComponent,
    DataProtectionComponent,
    MainComponent,
    MySkillsComponent,
    AboutMeComponent,
    MyWorkComponent,
    DescriptionAboutMeComponent,
    ContactMeComponent,
    FooterComponent,
    
    
    
    
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
