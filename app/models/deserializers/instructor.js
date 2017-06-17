module.exports = function(instructors){
    return Array.isArray(instructors) 
        ? instructors.map(deserializeInstructor)
        : deserializeInstructor(instructors);
}

function deserializeInstructor(instructor){
    if (instructor && instructor.start_date){
        instructor.start_date = instructor.start_date.toISOString();
    }
    return instructor;
}
