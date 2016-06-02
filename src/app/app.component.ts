import {Component, OnInit} from '@angular/core';
import {HeroesComponent} from './components/heroes/heroes.component';
import {HeroService} from "./services/hero.service";

@Component({
    selector:'app',
    templateUrl:'./app/app.html',
    directives:[HeroesComponent],
    providers: [
        HeroService
    ]
})

export class AppComponent {
    title = 'Tour of Heroes';
}

