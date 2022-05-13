// Convert string to Piglatin, putting first letter at the end, adding "ay"

function pigIt(string) {
    const newString = string.split(" ")
    let pigString = newString.map(element => {
        if (element === "!" || element === "?" || element === ".") {
            return element
        } else {
            let firstLetter = element[0]
            element += firstLetter
            element += "ay"
            let removeFirstLetter = element.slice(1, element.length)
            return removeFirstLetter
        }
    })
    let combinedPigLatin = pigString.join(" ")
    return combinedPigLatin
}