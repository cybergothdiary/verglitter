class AppError extends Error {
    constructor(status, message, name) {
        super();
        this.status = status;
        this.message = message;
        this.name = name;
    }
}
module.exports = AppError;