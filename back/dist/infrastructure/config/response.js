"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ApiResponse = {
    success: (res, message, data = null) => {
        return res.status(200).json({
            status: 200,
            message,
            data,
        });
    },
    badRequest: (res, message, errors = null) => {
        return res.status(400).json({
            status: 400,
            message,
            errors,
        });
    },
    notFound: (res, message) => {
        return res.status(404).json({
            status: 404,
            message,
            data: null,
        });
    },
    unauthorized: (res, message) => {
        return res.status(401).json({
            status: 401,
            message,
            data: null,
        });
    },
    forbidden: (res, message) => {
        return res.status(403).json({
            status: 403,
            message,
            data: null,
        });
    },
    serverError: (res, message, errors = null) => {
        return res.status(500).json({
            status: 500,
            message,
            errors,
        });
    },
    customError: (res, status, message, errors = null) => {
        return res.status(status).json({
            status,
            message,
            errors,
        });
    },
};
exports.default = ApiResponse;
