const USER = {
    id:22,
    displayName:"DanielCosta12", 
    fullName:{
        firstName:"Daniel",
        lastName:"Costa",
    }

}


function userId({id}){
    return id;
}

function getFullName ({fullName:{firstName: first, lastName: last}}){
    return `${first} ${last}`;
}

function userDisplayName({displayName}){
    return displayName;
}
console.log(userId(USER));
console.log(getFullName(USER));
console.log(userDisplayName(USER));