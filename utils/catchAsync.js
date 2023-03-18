module.exports = function catchAsync(asyncFunction) {
    return function(req, res, next) {
        asyncFunction(req, res, next).catch(e => next(e));
    };
};