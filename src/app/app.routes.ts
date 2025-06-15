
import { Routes } from '@angular/router';
//import { AboutComponent } from './pages/about/about.component';

import { AboutPageComponent } from './pages/about/about-page/about-page.component';

import { ContactComponent } from './pages/contact/contact.component';
import { HelpComponent } from './pages/help/help.component';

export const routes: Routes = [
    //    { path: 'about', component: AboutComponent },
    { path: 'about', component: AboutPageComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'help', component: HelpComponent },
    { path: '', redirectTo: 'about', pathMatch: 'full' },
];

