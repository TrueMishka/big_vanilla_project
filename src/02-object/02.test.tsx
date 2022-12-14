import {CityType} from "./02-for-test";

let city: CityType;

beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {
                buildedAt: 2012, repaired: false,
                address: {number: 100, street: {title: 'Black street'}}
            },
            {
                buildedAt: 2008, repaired: false,
                address: {number: 100, street: {title: 'Just street'}}
            },
            {
                buildedAt: 2020, repaired: false,
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

test('test city should contains 3 houses', () => {
    expect(city.houses.length).toBe(3);

    expect(city.houses[0].buildedAt).toBe(2012)
    expect(city.houses[0].repaired).toBe(false)
    expect(city.houses[0].address.number).toBe(100)
    expect(city.houses[0].address.street.title).toBe('Black street')

    expect(city.houses[1].buildedAt).toBe(2008)
    expect(city.houses[1].repaired).toBe(false)
    expect(city.houses[1].address.number).toBe(100)
    expect(city.houses[1].address.street.title).toBe('Just street')

    expect(city.houses[2].buildedAt).toBe(2020)
    expect(city.houses[2].repaired).toBe(false)
    expect(city.houses[2].address.number).toBe(101)
    expect(city.houses[2].address.street.title).toBe('White street')
})

test('test city should contains hospital and fire station', () => {
    expect(city.govermentBuildings.length).toBe(2);

    expect(city.govermentBuildings[0].type).toBe('Hospital')
    expect(city.govermentBuildings[0].budget).toBe(200000)
    expect(city.govermentBuildings[0].staffCount).toBe(200)
    expect(city.govermentBuildings[0].address.street.title).toBe('Central Str')

    expect(city.govermentBuildings[1].type).toBe('Fire-Station')
    expect(city.govermentBuildings[1].budget).toBe(500000)
    expect(city.govermentBuildings[1].staffCount).toBe(1000)
    expect(city.govermentBuildings[1].address.street.title).toBe('South Str')
})