module.exports = function deserializeLearnCohort(cohort){
    if (cohort && cohort.start_date){
        cohort.start_date = cohort.start_date.toISOString();
    }
    if (cohort && cohort.end_date){
        cohort.end_date = cohort.end_date.toISOString();
    }
    return cohort;
}
