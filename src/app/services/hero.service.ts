/**
 * Created by Moiz.Kachwala on 02-06-2016.
 */

import {Injectable} from '@angular/core';
import {HEROES} from "../mock/mock-heroes";


@Injectable()
export class HeroService {
    getHeroes() {
        return Promise.resolve(HEROES);
    }
}