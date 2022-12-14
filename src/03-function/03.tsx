import {StudentType} from "../02-object/02";
import {CityType, GovermentBuildingsType, HousesType} from "../02-object/02-for-test";

export const sum = (a: number, b: number) => {
    return a + b;
}

export const addSkill = (st: StudentType, skill: string) => {
    st.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function makeStudentActive(s: StudentType) {
    s.isActive = true;
}

export const doesStudentLiveIn = (stud: StudentType, city: string) => {
    return stud.address.city.title === city;
}

export const addMoneyToBudget = (govBuilds: Array<GovermentBuildingsType>, budget: number) => {
    for (let i = 0; i < govBuilds.length; i++) {
        govBuilds[i].budget += budget;
    }
}

export const demolishHousesOnTheStreet = (buildings: Array<HousesType>, title: string) => {
    for (let i = 0; i < buildings.length; i++) {
        if (buildings[i].address.street.title === title) {
            buildings.splice(i, 1);
        }
    }
}

export const repairHouse = (house: HousesType, isRepair: boolean) => {
    house.repaired = isRepair;
}

export const toFireStaff = (staffCount: GovermentBuildingsType, staffCountToFire: number) => {
    staffCount.staffCount -= staffCountToFire;
}
export const toHireStaff = (staffCount: GovermentBuildingsType, staffCountToHire: number) => {
    staffCount.staffCount += staffCountToHire;
}

export const createMessageForCity = (city: CityType) => {
    return `Hello ${city.title} citizen. I want you be Happy. All ${city.citizenNumber} man!`
}