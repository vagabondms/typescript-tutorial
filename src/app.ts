// Generics
// 동적으로 타입을 적용하게 한다.

const addUID = (obj: object) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

let docOne = addUID({ name: 'yoshi', age: 40 });

/*
  console.log(docOne.name); 
  이 코드는 에러를 뱉는다. function이 받는 인자, 혹은 return 하는 요소가 'name' prop을 갖고 있는 지
  정해주지 않았기 때문이다.
  이를 generic으로 해결가능하다.
 */

const addUIDWGen = <T extends { name: string }>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

// let docTwo = addUIDWGen('hello');
let docOneWGen = addUIDWGen({ name: 'yoshi', age: 40 });

// with interfaces

interface Resource<T> {
  uid: number;
  resourceName: number;
  data: T;
}

let person: Resource<string>;
person = {
  uid: 1,
  resourceName: 1,
  data: 'hi',
};

// ENUMS

enum ResourceType {
  BOOK,
  AUTHOR,
  FILM,
  DIRECTOR,
  PERSON,
}

const docFour: Resource<object> = {
  uid: 1,
  resourceName: ResourceType.BOOK,
  data: { title: 'name of the wind' },
};

const docFive: Resource<object> = {
  uid: 10,
  resourceName: ResourceType.PERSON,
  data: { name: 'yoshi' },
};

console.log(docFive);
