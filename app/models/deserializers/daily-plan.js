module.exports = function(dailyPlans){
    return Array.isArray(dailyPlans) 
        ? dailyPlans.map(deserializeDailyPlan)
        : deserializeDailyPlan(dailyPlans);
}

function deserializeDailyPlan(dailyPlan){
    if (dailyPlan && dailyPlan.date){
        dailyPlan.date = dailyPlan.date.toISOString();
    }
    return dailyPlan;
}
