const findTheOldest = function(people) {
    return people.sort(function (a, b) {
        return (((b.yearOfDeath || a.yearOfBirth) - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth));
    })[0];
};

// Do not edit below this line
module.exports = findTheOldest;
