const euqlidAlgorythm = (a, b) => {
    try {
         if (!Number.isInteger(a) || !Number.isInteger(b) || a <= 0 || b <= 0) {
           throw new Error ("Аргументи повинні бути цілими числами, більше за нуль");
         }
         while (b !== 0){
            let temp = b;
            b = a % b;
            a = temp;
         }
            return a;
    } catch (error) {
        return error.message;
    }
};

console.log(euqlidAlgorythm(0, 5));
console.log(euqlidAlgorythm('', 5));
console.log(euqlidAlgorythm(undefined, 5));
console.log(euqlidAlgorythm(5.5, 4.2));
console.log(euqlidAlgorythm(16, 8));
console.log(euqlidAlgorythm(10, 13));
console.log(euqlidAlgorythm(5,5));


