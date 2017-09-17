import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Car } from '../models/car';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CarService {
    
    constructor(private http: Http) {}

    getCarsSmall() {
        return this.http.get('assets/data/cars-small.json')
                    .toPromise()
                    .then(res => {
                        console.log(res);
                        console.log(res.json());
                        return res.json().data as Car[]});
                    // .then(data => { return data; });
    }

    getCarsMedium() {
        return this.http.get('assets/data/cars-medium.json')
                    .toPromise()
                    .then(res => {
                        console.log(res);
                        console.log(res.json());
                        return res.json().data as Car[]});
                    // .then(data => { return data; });
    }

    getCarsLarge() {
        return this.http.get('assets/data/cars-large.json')
                    .toPromise()
                    .then(res => {
                        console.log(res);
                        console.log(res.json());
                        return res.json().data as Car[]});
                    // .then(data => { return data; });
    }
}