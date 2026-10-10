
export function fn() {
    const obj1 = {
        name: ""
    };

    let obj2 = {
        name: ""
    };

    obj1.name = "Kirill";
    obj2.name = "Anton";
    console.dir(obj1);
    console.dir(obj2);
    //obj1 = obj2;
    console.dir(obj1);
    console.dir(obj2);
    obj2 = obj1;
    console.dir(obj1);
    console.dir(obj2);
}

export function createUser(name, city) {
    return {name: name, city: city}
}
