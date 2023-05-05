import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginUserComponent } from './user-profile-arm/login-register/login-user/login-user.component';
import { RegisterUserComponent } from './user-profile-arm/login-register/register-user/register-user.component';
import { UserProfileComponent } from './user-profile-arm/user-profile/user-profile/user-profile.component';
import { EventViewComponent } from './event-view/event-view.component';
import { DropdownMenuComponent } from './user-profile-arm/experiments/dropdown-menu/dropdown-menu.component';
import { ForumComponent } from './community-forum-arm/forum/forum.component';
import { CommunityHomeComponent } from './community-forum-arm/community-home/community-home.component';
import { RestaurantsHomepageComponent } from './restaurants-homepage/restaurants-homepage.component';
import { RestaurantAmericanComponent } from './restaurants-homepage/restaurant-american/restaurant-american.component';
import { RestaurantAsianComponent } from './restaurants-homepage/restaurant-asian/restaurant-asian.component';
import { RestaurantsMexicanComponent } from './restaurants-homepage/restaurants-mexican/restaurants-mexican.component';
import { RestaurantsItalianComponent } from './restaurants-homepage/restaurants-italian/restaurants-italian.component';
import { RestaurantsPizzaComponent } from './restaurants-homepage/restaurants-pizza/restaurants-pizza.component';



const routes: Routes = [
  {path: 'login', component: LoginUserComponent},
  {path: 'register', component: RegisterUserComponent},
  {path: 'myProfile', component: UserProfileComponent},
  {path: 'events', component: EventViewComponent},
  {path: 'testing', component: DropdownMenuComponent},
  {path: 'forum', component: ForumComponent},
  {path: 'communityHomeForum', component: CommunityHomeComponent},
  {path: 'restaurants' , component: RestaurantsHomepageComponent},
  {path: 'restaurants/american' , component: RestaurantAmericanComponent},
  {path: 'restaurants/asian' , component: RestaurantAsianComponent},
  {path: 'restaurants/mexican' , component: RestaurantsMexicanComponent},
  {path: 'restaurants/italian' , component: RestaurantsItalianComponent},
  {path: 'restaurants/pizza' , component: RestaurantsPizzaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
