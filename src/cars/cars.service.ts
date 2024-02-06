import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {
    private cars = []

    getAllCars() {
        return this.cars
    }
}
