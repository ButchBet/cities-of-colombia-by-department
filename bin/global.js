#!/usr/bin/env node
import minimist from 'minimist';
import returnDepartments from '../src/departments.js';

const input = minimist(process.argv);
const departments = returnDepartments();
console.log(departments['san andres y providencia'])