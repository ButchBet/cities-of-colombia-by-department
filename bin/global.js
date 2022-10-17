#!/usr/bin/env node
import minimist from 'minimist';
import returnDepartments from '../src/departments.js';

const department =  minimist(process.argv)._[2]; // Getting the entered department
const departments = returnDepartments(); // Getting the object departmentsOfColombia
const entries = Object.entries(departments);



if(department) { // check if the input exists
    if(departments[department.toLowerCase()]) { // check if the department exist
        const cities = departments[department.toLowerCase()].join(', ');
        console.log(`${department}: ${cities}.`);
    } else  {
        console.log('Please enter an existing department, without accents and thus.')
    }
} else { // Show a random repartent in case of not input
    const randomIndex = Math.floor(Math.random() * entries.length);
    const randomDep = entries[randomIndex][0];
    const randomCities = entries[randomIndex][1].join(', ');
    console.log(`${randomDep}: ${randomCities}.`);
}