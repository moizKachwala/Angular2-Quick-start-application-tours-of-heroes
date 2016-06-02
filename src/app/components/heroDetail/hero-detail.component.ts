/**
 * Created by Moiz.Kachwala on 02-06-2016.
 */

import {Component, Input} from '@angular/core';
import {Hero} from "../../models/hero";


@Component({
    selector: 'my-hero-detail',
    templateUrl:'./app/heroDetail/hero-detail.component.html'
})

export class HeroDetailComponent {
    @Input()
    hero:Hero;
}