const grade = 89;

switch(true) {
    case grade >= 89:
        console.log(`${grade} is an A`)
        break;
    case grade >= 79:
        console.log(`${grade} is a B`) 
        break;
    case grade >= 66:
        console.log(`${grade} is a C`)
        break;
    case grade >= 59:
        console.log(`${grade} is a D`)   
        break;
    case grade < 58:
        console.log(`${grade} is a F`)
        break;
    default:
        console.log(`${grade} Input is not a grade`)
        break;
}
