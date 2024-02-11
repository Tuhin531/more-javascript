const names = ['asif', 'sayem', 'akbor', 'shofikul', ' sam', 'asif', 'akbor', 'shafikul', 'sayem'];
function removeDuplicateName(name) {

    const unique = [];
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        if (unique.includes(name) === false) {
            unique.push(name);
        }

    }
    return unique;
}
const uniqueName = removeDuplicateName(names);
console.log(uniqueName);