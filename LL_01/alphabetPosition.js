function alphabetPosition(inputString) {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const result = [];

    for (let i = 0; i < inputString.length; i++) {
        const value = inputString[i].toLowerCase()
        if (!letters.includes(value)) continue;
        result.push(letters.indexOf(value) + 1)
    }

    return result.join(" ");
}