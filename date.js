module.exports.getDate = function() {
    var today = new Date();
    var option = {
        day: "numeric",
        weekday: "long",
        month: "long",
    };
    return today.toLocaleDateString("en-US", option);
};

module.exports.getDay = function() {
    var today = new Date();
    var option = {
        weekday: "long",
    };
    return today.toLocaleDateString("en-US", option);
};