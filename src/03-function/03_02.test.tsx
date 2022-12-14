import {CityType} from "../02-object/02-for-test";
import {
    addMoneyToBudget,
    createMessageForCity,
    demolishHousesOnTheStreet,
    repairHouse,
    toFireStaff,
    toHireStaff
} from "./03";
import {create} from "domain";

let city: CityType;

beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {
                id: 1, buildedAt: 2012, repaired: false,
                address: {number: 100, street: {title: 'Black street'}}
            },
            {
                id: 2, buildedAt: 2008, repaired: false,
                address: {number: 100, street: {title: 'Just street'}}
            },
            {
                id: 3, buildedAt: 2020, repaired: false,
                address: {number: 101, street: {title: 'White street'}}
            }
        ],
        govermentBuildings: [
            {
                type: 'Hospital', budget: 200000, staffCount: 200,
                address: {number: 100, street: {title: 'Central Str'}}
            },
            {
                type: 'Fire-Station', budget: 500000, staffCount: 1000,
                address: {number: 100, street: {title: 'South Str'}}
            }
        ],
        citizenNumber: 10000000
    }
})

test('Budget should be changed +', () => {
    addMoneyToBudget(city.govermentBuildings, 100000);

    expect(city.govermentBuildings[0].budget).toBe(300000);
    expect(city.govermentBuildings[1].budget).toBe(600000);
})

test('Budget should be changed -', () => {
    addMoneyToBudget(city.govermentBuildings, -100000);

    expect(city.govermentBuildings[0].budget).toBe(100000);
    expect(city.govermentBuildings[1].budget).toBe(400000);
})

test('Houses should be Destroy', () => {
    demolishHousesOnTheStreet(city.houses, 'Black street');

    expect(city.houses.length).toBe(2);
    expect(city.houses[0].id).toBe(2);
})

test('House should be repair', () => {
    repairHouse(city.houses[0], true);
    expect(city.houses[0].repaired).toBeTruthy();
})

test('Staff should be decrease', () => {
    toFireStaff(city.govermentBuildings[0], 20);
    toFireStaff(city.govermentBuildings[1], 200);

    expect(city.govermentBuildings[0].staffCount).toBe(180);
    expect(city.govermentBuildings[1].staffCount).toBe(800);
})

test('Staff should be increased', () => {
    toHireStaff(city.govermentBuildings[0], 20);
    toHireStaff(city.govermentBuildings[1], 200);

    expect(city.govermentBuildings[0].staffCount).toBe(220);
    expect(city.govermentBuildings[1].staffCount).toBe(1200);
})

test('Greeting message should be correct for city', () => {
    const messageForCity = createMessageForCity(city);

    expect(messageForCity).toBe("Hello New York citizen. I want you be Happy. All 10000000 man!")
})