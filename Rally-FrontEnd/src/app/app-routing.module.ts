import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginUserComponent } from './user-profile-arm/login-register/login-user/login-user.component';
import { RegisterUserComponent } from './user-profile-arm/login-register/register-user/register-user.component';
import { UserProfileComponent } from './user-profile-arm/user-profile/user-profile/user-profile.component';
import { EventViewComponent } from './event-view/event-view.component';
import { ForumComponent } from './community-forum-arm/forum/forum.component';
import { CommunityHomeComponent } from './community-forum-arm/forum/community-home/community-home.component';
import { IntroductionsComponent } from './community-forum-arm/forum/introductions/introductions.component';
import { ForumTopic1Component } from './community-forum-arm/forum/forum-topic1/forum-topic1.component';
import { ForumTopic2Component } from './community-forum-arm/forum/forum-topic2/forum-topic2.component';
import { ForumTopic3Component } from './community-forum-arm/forum/forum-topic3/forum-topic3.component';


const routes: Routes = [
  {path: 'login', component: LoginUserComponent},
  {path: 'register', component: RegisterUserComponent},
  {path: 'myProfile', component: UserProfileComponent},
  {path: 'events', component: EventViewComponent},
  {path: 'forum', component: ForumComponent},
  {path: 'forum/communityhome', component: CommunityHomeComponent},
  {path: 'forum/introductions', component: IntroductionsComponent},
  {path: 'forum/topic1', component: ForumTopic1Component},
  {path: 'forum/topic2', component: ForumTopic2Component},
  {path: 'forum/topic3', component: ForumTopic3Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
