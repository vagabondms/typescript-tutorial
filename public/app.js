"use strict";
// Generics
// 동적으로 타입을 적용하게 한다.
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'yoshi', age: 40 });
/*
  console.log(docOne.name);
  이 코드는 에러를 뱉는다. function이 받는 인자, 혹은 return 하는 요소가 'name' prop을 갖고 있는 지
  정해주지 않았기 때문이다.
  이를 generic으로 해결가능하다.
 */
const addUIDWGen = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
// let docTwo = addUIDWGen('hello');
let docOneWGen = addUIDWGen({ name: 'yoshi', age: 40 });
let person;
person = {
    uid: 1,
    resourceName: 1,
    data: 'hi',
};
// ENUMS
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
const docFour = {
    uid: 1,
    resourceName: ResourceType.BOOK,
    data: { title: 'name of the wind' },
};
const docFive = {
    uid: 10,
    resourceName: ResourceType.PERSON,
    data: { name: 'yoshi' },
};
console.log(docFive);
