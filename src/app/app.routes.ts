import {Routes,RouterModule} from '@angular/router';
/* COMPONENTS */
import {HomeComponent} from './components/home/home.component';
import {HeroesComponent} from './components/heroes/heroes.component';
import {AboutComponent} from './components/about/about.component';

const APP_ROUTES: Routes = [
    {path:'home',component:HomeComponent},
    {path:'heroes',component:HeroesComponent},
    {path:'about',component:AboutComponent},
    {path:'**',pathMatch:'full',redirectTo:'home'}//Si no encuentra la ruta irá a home (siempre va al último)
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);