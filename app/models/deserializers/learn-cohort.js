module.exports = function(cohorts){
    return Array.isArray(cohorts) 
        ? cohorts.map(deserializeLearnCohort)
        : deserializeLearnCohort(cohorts);
}

function deserializeLearnCohort(cohort){
    if (cohort && cohort.start_date){
        cohort.start_date = cohort.start_date.toISOString();
    }
    if (cohort && cohort.end_date){
        cohort.end_date = cohort.end_date.toISOString();
    }
    return cohort;
}
