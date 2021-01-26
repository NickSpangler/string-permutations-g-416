function findAllPermutations(string) {
    if (string.length < 2) return string;
    
    let permutations = [];
    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        let rest = string.slice(0, i) + string.slice(i + 1);

        for (const subPermutation of findAllPermutations(rest)) {
            permutations.push(char + subPermutation)
        }
    }
    return permutations;
}
