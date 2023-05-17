import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EventViewComponent } from './Events/event-view/event-view.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterUserComponent } from './user-profile-arm/login-register/register-user/register-user.component';
import { LoginUserComponent } from './user-profile-arm/login-register/login-user/login-user.component';
import { UserProfileComponent } from './user-profile-arm/user-profile/user-profile-main/user-profile.component';
import { FormsModule } from '@angular/forms';
import { SearchUserComponent } from './user-profile-arm/user-profile/search-user/search-user.component';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { EventComponent } from './Events/event/event.component';
import { EventCreateComponent } from './Events/event-create/event-create.component';
import { ForumComponent } from './community-forum-arm/forum/forum.component';
import { ResourcesHomeComponent } from './resources-arm/resources-home/resources-home.component';
import { ResourcesAddComponent } from './resources-arm/resources-add/resources-add.component';

import { ServicesHomeComponent } from './services-arm/services-home/services-home.component';
import { OfferComponent } from './services-arm/offer/offer.component';
import { CommunityHomeComponent } from './community-forum-arm/forum/community-home/community-home.component';
import { IntroductionsComponent } from './community-forum-arm/forum/introductions/introductions.component';
import { ForumTopic1Component } from './community-forum-arm/forum/forum-topic1/forum-topic1.component';
import { ForumTopic2Component } from './community-forum-arm/forum/forum-topic2/forum-topic2.component';
import { ThemeserviceService } from './services/themeservice.service';
import { ForumTopic3Component } from './community-forum-arm/forum/forum-topic3/forum-topic3.component';
import { ViewPostComponent } from './community-forum-arm/forum/view-post/view-post.component';
import { ViewUserProfileComponent } from './user-profile-arm/user-profile/view-user-profile/view-user-profile.component';
import { EventEditComponent } from './Events/event-edit/event-edit.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
// import {MatDatepickerModule} from '@angular/material/datepicker';
// import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent,
    LoginUserComponent,
    UserProfileComponent,
    SearchUserComponent,
    EventViewComponent,
    ForumComponent,
    CommunityHomeComponent,
    ResourcesHomeComponent,
    ResourcesAddComponent,
    EventComponent,
    EventCreateComponent,
    ServicesHomeComponent,
    OfferComponent,
    IntroductionsComponent,
    ForumTopic1Component,
    ForumTopic2Component,
    ForumTopic3Component,
    ViewPostComponent,
    ViewUserProfileComponent,
    UserProfileComponent,
    EventEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    // MatDatepickerModule,
    // MatCardModule,
  ],
  providers: [CookieService, ThemeserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }