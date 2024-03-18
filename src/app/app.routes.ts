import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MatchupCollectionComponent } from './pages/matchup-collection/matchup-collection.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { TechComponent } from './pages/tech/tech.component';
import { MatchupComponent } from './pages/matchup/matchup.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'matchups', component: MatchupCollectionComponent},
    { path: 'resources', component: ResourcesComponent },
    { path: 'tech', component: TechComponent },
    { path: 'matchup/:id', component: MatchupComponent }
];
