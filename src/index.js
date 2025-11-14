const euqlidAlgorythm = (a, b) => {
    try {
        if (a <= 0 && b <= 0)
          throw new RangeError("Числа мають бути більше нуля");
        if (b === 0) return a;
        return euqlidAlgorythm(b, a % b);
    } catch (error) {
        return error.message
    }
};

console.log(euqlidAlgorythm(0, 0));
console.log(euqlidAlgorythm(16, 8));
console.log(euqlidAlgorythm(10, 13));

