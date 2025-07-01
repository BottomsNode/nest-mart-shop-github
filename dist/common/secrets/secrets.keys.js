"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PUBLIC_KEY = exports.DB_SSL_MODE = exports.SESSION_SECRET = exports.NODE_ENV = exports.jwtSecret = exports.SWAGGER_DOCS = exports.DB_PASSWORD = exports.DB_USERNAME = exports.DB_PORT = exports.DB_HOST = exports.DB_TYPE = exports.DB_NAME = exports.PORT = void 0;
const dotenv = require("dotenv");
dotenv.config({ path: './.env' });
exports.PORT = process.env.PORT;
exports.DB_NAME = process.env.DB_NAME;
exports.DB_TYPE = process.env.DB_TYPE;
exports.DB_HOST = process.env.DB_HOST;
exports.DB_PORT = process.env.DB_PORT;
exports.DB_USERNAME = process.env.DB_USERNAME;
exports.DB_PASSWORD = process.env.DB_PASSWORD;
exports.SWAGGER_DOCS = process.env.SWAGGER_DOCS;
exports.jwtSecret = process.env.JWT_SECRET;
exports.NODE_ENV = process.env.NODE_ENV;
exports.SESSION_SECRET = process.env.SESSION_SECRET;
exports.DB_SSL_MODE = process.env.DB_SSL_MODE;
exports.PUBLIC_KEY = 'isPublic';
//# sourceMappingURL=secrets.keys.js.map