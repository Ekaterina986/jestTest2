export default function sortUser(usersList) {
    return usersList.sort((userA, userB)=> {
        if (userA.health > userB.health) {
            return -1
        } else if (userA.health < userB.health) {
            return 1
        } 
        return 0
    })
}