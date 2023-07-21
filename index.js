// code your solution here

function superbowlWin(arr) {
    const res = arr.find(arr => (arr.result === "W"))
    if (res) {
        return res.year
    }
    return res

}

/* function winningYear(arr) {
    return (arr.result === "W")
}

function superbowlWin(arr) {
    return arr.find(winningYear)
} */

