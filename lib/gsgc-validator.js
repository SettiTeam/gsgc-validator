module.exports = {

    isBetween: function(str, min, max) {
        return str && str.length >= min && str.length <= max;
    },

    isLessThan: function(str, max) {
        return str && str.length < max;
    },

    isGreaterThan: function(str, min) {
        return str && str.length > min;
    },

    isAlphanumeric: function(str) {
        return /^[a-z0-9]+$/i.test(str);
    },

    isUsername: function(str) {
        return /^[a-z0-9\-\_]+$/i.test(str);
    },

    isPassword: function(str) {
        return str && str.length >= 6;
    },

    isEmail: function(str) {
        return /^.+@.+\..+$/.test(str);
    }

};
