import * as manip from "./array_manipulator.mjs";

{
    const array = [1, 2, 3, 4, 5, 6, 7];
    manip.removeElement(array, 5);
    console.log(array);
    // Result: [1, 2, 3, 4, 6, 7]
    const array2 = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
    manip.removeElement(array2, 'Lima');
    manip.removeElement(array2, 'Berlin');
    console.log(array2);
    // Result: ['Kiev', 'Beijing', 'Saratov']
}
{
    const array1 = [1, 2, 3, 4, 5, 6, 7];
    manip.removeElements(array1, 5, 1, 6);
    console.log(array1);
    // Result: [2, 3, 4, 7]

    const array2 = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
    manip.removeElements(array2, 'Lima', 'Berlin', 'Kiev');
    console.log(array2);
    // Result: ['Beijing', 'Saratov']
}

{
    const result = manip.unique([2, 1, 1, 3, 2]);
    console.log(result);
    // Result: [2, 1, 3]

    const result2 = manip.unique(['top', 'bottom', 'top', 'left']);
    console.log(result2);
    // Result: ['top', 'bottom', 'left']
}


{
    {
        const array1 = [7, -2, 10, 5, 0];
        const array2 = [0, 10];
        const result = manip.difference(array1, array2);
        console.log(result);
        // Result: [7, -2, 5]
    }
    {
        const array1 = ['Beijing', 'Kiev'];
        const array2 = ['Kiev', 'London', 'Baghdad'];
        const result = manip.difference(array1, array2);
        console.log(result);
        // Result: ['Beijing']
    }
}
