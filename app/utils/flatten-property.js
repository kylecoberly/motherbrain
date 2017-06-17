module.exports = function flattenProperty(propertyName, object){
    object = Object.assign(object, object[propertyName]);
    delete object.learnCohort;
    return object;
};
