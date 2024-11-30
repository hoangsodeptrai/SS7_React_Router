import React from 'react'
const students =[{
    id:1,
    name:'hoàng',
    address:'Hà Nội',
},{
    id:2,
    name:'Bach',
    address:'hcm',
}

]
export default function getAllStudents(){
    return students
};
export function addStudents(s){
    students.push(s);
};
export function searchName(name){
    return students.filter((s)=>s.name.includes(name));
}
