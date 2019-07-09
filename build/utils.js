"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToData = function (dateString) {
    var dataParts = dateString
        .split('/')
        .map(function (value) {
        return parseInt(value);
    });
    return new Date(dataParts[2], dataParts[1] - 1);
};
