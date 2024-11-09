/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/config/database.ts":
/*!********************************!*\
  !*** ./src/config/database.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const pg_1 = __webpack_require__(/*! pg */ "pg");
const dotenv_1 = __importDefault(__webpack_require__(/*! dotenv */ "dotenv"));
dotenv_1.default.config();
const pool = new pg_1.Pool({
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});
exports["default"] = pool;


/***/ }),

/***/ "./src/controllers/orderController.ts":
/*!********************************************!*\
  !*** ./src/controllers/orderController.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getOrderById = exports.getAllOrders = exports.createOrder = void 0;
const orderModel_1 = __importDefault(__webpack_require__(/*! ../models/orderModel */ "./src/models/orderModel.ts"));
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = yield orderModel_1.default.create(req.body);
        res.status(201).json(order);
    }
    catch (error) {
        res.status(500).json({ error: 'Error creating order' });
    }
});
exports.createOrder = createOrder;
const getAllOrders = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orders = yield orderModel_1.default.findAll();
        res.status(200).json(orders);
    }
    catch (error) {
        res.status(500).json({ error: 'Error fetching orders' });
    }
});
exports.getAllOrders = getAllOrders;
const getOrderById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = yield orderModel_1.default.findById(parseInt(req.params.id));
        if (order) {
            res.status(200).json(order);
        }
        else {
            res.status(404).json({ error: 'Order not found' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Error fetching order' });
    }
});
exports.getOrderById = getOrderById;


/***/ }),

/***/ "./src/controllers/productController.ts":
/*!**********************************************!*\
  !*** ./src/controllers/productController.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getProductById = exports.getAllProducts = exports.createProduct = void 0;
const productModel_1 = __importDefault(__webpack_require__(/*! ../models/productModel */ "./src/models/productModel.ts"));
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield productModel_1.default.create(req.body);
        res.status(201).json(product);
    }
    catch (error) {
        res.status(500).json({ error: 'Error creating product' });
    }
});
exports.createProduct = createProduct;
const getAllProducts = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield productModel_1.default.findAll();
        res.status(200).json(products);
    }
    catch (error) {
        res.status(500).json({ error: 'Error fetching products' });
    }
});
exports.getAllProducts = getAllProducts;
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield productModel_1.default.findById(parseInt(req.params.id));
        if (product) {
            res.status(200).json(product);
        }
        else {
            res.status(404).json({ error: 'Product not found' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Error fetching product' });
    }
});
exports.getProductById = getProductById;


/***/ }),

/***/ "./src/models/orderModel.ts":
/*!**********************************!*\
  !*** ./src/models/orderModel.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const database_1 = __importDefault(__webpack_require__(/*! ../config/database */ "./src/config/database.ts"));
class OrderModel {
    create(order) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query('INSERT INTO orders (user_id, product_id, quantity, status) VALUES ($1, $2, $3, $4) RETURNING *', [order.user_id, order.product_id, order.quantity, order.status || 'pending']);
            return result.rows[0];
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query('SELECT * FROM orders');
            return result.rows;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query('SELECT * FROM orders WHERE id = $1', [id]);
            return result.rows[0] || null;
        });
    }
}
exports["default"] = new OrderModel();


/***/ }),

/***/ "./src/models/productModel.ts":
/*!************************************!*\
  !*** ./src/models/productModel.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const database_1 = __importDefault(__webpack_require__(/*! ../config/database */ "./src/config/database.ts"));
class ProductModel {
    create(product) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query('INSERT INTO products (name, price, category) VALUES ($1, $2, $3) RETURNING *', [product.name, product.price, product.category]);
            return result.rows[0];
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query('SELECT * FROM products');
            return result.rows;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query('SELECT * FROM products WHERE id = $1', [id]);
            return result.rows[0] || null;
        });
    }
}
exports["default"] = new ProductModel();


/***/ }),

/***/ "./src/routes/orderRoutes.ts":
/*!***********************************!*\
  !*** ./src/routes/orderRoutes.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const express_1 = __importDefault(__webpack_require__(/*! express */ "express"));
const orderController_1 = __webpack_require__(/*! ../controllers/orderController */ "./src/controllers/orderController.ts");
const router = express_1.default.Router();
router.post('/', orderController_1.createOrder);
router.get('/', orderController_1.getAllOrders);
router.get('/:id', orderController_1.getOrderById);
exports["default"] = router;


/***/ }),

/***/ "./src/routes/productRoutes.ts":
/*!*************************************!*\
  !*** ./src/routes/productRoutes.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const express_1 = __importDefault(__webpack_require__(/*! express */ "express"));
const productController_1 = __webpack_require__(/*! ../controllers/productController */ "./src/controllers/productController.ts");
const router = express_1.default.Router();
router.post('/', productController_1.createProduct);
router.get('/', productController_1.getAllProducts);
router.get('/:id', productController_1.getProductById);
exports["default"] = router;


/***/ }),

/***/ "./src/server.ts":
/*!***********************!*\
  !*** ./src/server.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const express_1 = __importDefault(__webpack_require__(/*! express */ "express"));
const dotenv = __importStar(__webpack_require__(/*! dotenv */ "dotenv"));
const productRoutes_1 = __importDefault(__webpack_require__(/*! ./routes/productRoutes */ "./src/routes/productRoutes.ts"));
const orderRoutes_1 = __importDefault(__webpack_require__(/*! ./routes/orderRoutes */ "./src/routes/orderRoutes.ts"));
// Load environment variables from .env file
dotenv.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// Middleware to parse JSON bodies
app.use(express_1.default.json());
// Route definitions
app.use('/products', productRoutes_1.default);
app.use('/orders', orderRoutes_1.default);
// Basic route for health check
app.get('/', (_req, res) => {
    res.send('API is running');
});
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
exports["default"] = app;


/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("pg");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBRyxFQUFFO0lBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLElBQUksRUFBRSxDQUFDLENBQUM7QUFDckQsQ0FBQyxDQUFDLENBQUM7QUFFSCxxQkFBZSxHQUFHLENBQUM7Ozs7Ozs7Ozs7O0FDN0JuQjs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7VUV0QkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHByZXNzLXN0b3JlLWFwaS8uL3NyYy9jb25maWcvZGF0YWJhc2UudHMiLCJ3ZWJwYWNrOi8vZXhwcmVzcy1zdG9yZS1hcGkvLi9zcmMvY29udHJvbGxlcnMvb3JkZXJDb250cm9sbGVyLnRzIiwid2VicGFjazovL2V4cHJlc3Mtc3RvcmUtYXBpLy4vc3JjL2NvbnRyb2xsZXJzL3Byb2R1Y3RDb250cm9sbGVyLnRzIiwid2VicGFjazovL2V4cHJlc3Mtc3RvcmUtYXBpLy4vc3JjL21vZGVscy9vcmRlck1vZGVsLnRzIiwid2VicGFjazovL2V4cHJlc3Mtc3RvcmUtYXBpLy4vc3JjL21vZGVscy9wcm9kdWN0TW9kZWwudHMiLCJ3ZWJwYWNrOi8vZXhwcmVzcy1zdG9yZS1hcGkvLi9zcmMvcm91dGVzL29yZGVyUm91dGVzLnRzIiwid2VicGFjazovL2V4cHJlc3Mtc3RvcmUtYXBpLy4vc3JjL3JvdXRlcy9wcm9kdWN0Um91dGVzLnRzIiwid2VicGFjazovL2V4cHJlc3Mtc3RvcmUtYXBpLy4vc3JjL3NlcnZlci50cyIsIndlYnBhY2s6Ly9leHByZXNzLXN0b3JlLWFwaS9leHRlcm5hbCBjb21tb25qcyBcImRvdGVudlwiIiwid2VicGFjazovL2V4cHJlc3Mtc3RvcmUtYXBpL2V4dGVybmFsIGNvbW1vbmpzIFwiZXhwcmVzc1wiIiwid2VicGFjazovL2V4cHJlc3Mtc3RvcmUtYXBpL2V4dGVybmFsIGNvbW1vbmpzIFwicGdcIiIsIndlYnBhY2s6Ly9leHByZXNzLXN0b3JlLWFwaS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leHByZXNzLXN0b3JlLWFwaS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2V4cHJlc3Mtc3RvcmUtYXBpL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9leHByZXNzLXN0b3JlLWFwaS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUG9vbCB9IGZyb20gJ3BnJztcclxuaW1wb3J0IGRvdGVudiBmcm9tICdkb3RlbnYnO1xyXG5cclxuZG90ZW52LmNvbmZpZygpO1xyXG5cclxuY29uc3QgcG9vbCA9IG5ldyBQb29sKHtcclxuICAgIGhvc3Q6IHByb2Nlc3MuZW52LkRCX0hPU1QsXHJcbiAgICBwb3J0OiBwYXJzZUludChwcm9jZXNzLmVudi5EQl9QT1JUIGFzIHN0cmluZywgMTApLFxyXG4gICAgdXNlcjogcHJvY2Vzcy5lbnYuREJfVVNFUixcclxuICAgIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5EQl9QQVNTV09SRCxcclxuICAgIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5EQl9OQU1FLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBvb2w7XHJcbiIsImltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCBvcmRlck1vZGVsIGZyb20gJy4uL21vZGVscy9vcmRlck1vZGVsJztcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVPcmRlciA9IGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JkZXIgPSBhd2FpdCBvcmRlck1vZGVsLmNyZWF0ZShyZXEuYm9keSk7XHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDEpLmpzb24ob3JkZXIpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiAnRXJyb3IgY3JlYXRpbmcgb3JkZXInIH0pO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEFsbE9yZGVycyA9IGFzeW5jIChfcmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yZGVycyA9IGF3YWl0IG9yZGVyTW9kZWwuZmluZEFsbCgpO1xyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKG9yZGVycyk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6ICdFcnJvciBmZXRjaGluZyBvcmRlcnMnIH0pO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldE9yZGVyQnlJZCA9IGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JkZXIgPSBhd2FpdCBvcmRlck1vZGVsLmZpbmRCeUlkKHBhcnNlSW50KHJlcS5wYXJhbXMuaWQpKTtcclxuICAgICAgICBpZiAob3JkZXIpIHtcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24ob3JkZXIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgZXJyb3I6ICdPcmRlciBub3QgZm91bmQnIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogJ0Vycm9yIGZldGNoaW5nIG9yZGVyJyB9KTtcclxuICAgIH1cclxufTtcclxuIiwiaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IHByb2R1Y3RNb2RlbCBmcm9tICcuLi9tb2RlbHMvcHJvZHVjdE1vZGVsJztcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVQcm9kdWN0ID0gYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBwcm9kdWN0ID0gYXdhaXQgcHJvZHVjdE1vZGVsLmNyZWF0ZShyZXEuYm9keSk7XHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDEpLmpzb24ocHJvZHVjdCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6ICdFcnJvciBjcmVhdGluZyBwcm9kdWN0JyB9KTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRBbGxQcm9kdWN0cyA9IGFzeW5jIChfcmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgcHJvZHVjdE1vZGVsLmZpbmRBbGwoKTtcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihwcm9kdWN0cyk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6ICdFcnJvciBmZXRjaGluZyBwcm9kdWN0cycgfSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdEJ5SWQgPSBhc3luYyAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHByb2R1Y3QgPSBhd2FpdCBwcm9kdWN0TW9kZWwuZmluZEJ5SWQocGFyc2VJbnQocmVxLnBhcmFtcy5pZCkpO1xyXG4gICAgICAgIGlmIChwcm9kdWN0KSB7XHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHByb2R1Y3QpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgZXJyb3I6ICdQcm9kdWN0IG5vdCBmb3VuZCcgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiAnRXJyb3IgZmV0Y2hpbmcgcHJvZHVjdCcgfSk7XHJcbiAgICB9XHJcbn07XHJcbiIsImltcG9ydCBwb29sIGZyb20gJy4uL2NvbmZpZy9kYXRhYmFzZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE9yZGVyIHtcclxuICAgIGlkPzogbnVtYmVyO1xyXG4gICAgdXNlcl9pZDogbnVtYmVyO1xyXG4gICAgcHJvZHVjdF9pZDogbnVtYmVyO1xyXG4gICAgcXVhbnRpdHk6IG51bWJlcjtcclxuICAgIHN0YXR1cz86IHN0cmluZztcclxufVxyXG5cclxuY2xhc3MgT3JkZXJNb2RlbCB7XHJcbiAgICBhc3luYyBjcmVhdGUob3JkZXI6IE9yZGVyKTogUHJvbWlzZTxPcmRlcj4ge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHBvb2wucXVlcnkoXHJcbiAgICAgICAgICAgICdJTlNFUlQgSU5UTyBvcmRlcnMgKHVzZXJfaWQsIHByb2R1Y3RfaWQsIHF1YW50aXR5LCBzdGF0dXMpIFZBTFVFUyAoJDEsICQyLCAkMywgJDQpIFJFVFVSTklORyAqJyxcclxuICAgICAgICAgICAgW29yZGVyLnVzZXJfaWQsIG9yZGVyLnByb2R1Y3RfaWQsIG9yZGVyLnF1YW50aXR5LCBvcmRlci5zdGF0dXMgfHwgJ3BlbmRpbmcnXVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5yb3dzWzBdO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGZpbmRBbGwoKTogUHJvbWlzZTxPcmRlcltdPiB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcG9vbC5xdWVyeSgnU0VMRUNUICogRlJPTSBvcmRlcnMnKTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0LnJvd3M7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZmluZEJ5SWQoaWQ6IG51bWJlcik6IFByb21pc2U8T3JkZXIgfCBudWxsPiB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcG9vbC5xdWVyeSgnU0VMRUNUICogRlJPTSBvcmRlcnMgV0hFUkUgaWQgPSAkMScsIFtpZF0pO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQucm93c1swXSB8fCBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgT3JkZXJNb2RlbCgpO1xyXG4iLCJpbXBvcnQgcG9vbCBmcm9tICcuLi9jb25maWcvZGF0YWJhc2UnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQcm9kdWN0IHtcclxuICAgIGlkPzogbnVtYmVyO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgcHJpY2U6IG51bWJlcjtcclxuICAgIGNhdGVnb3J5Pzogc3RyaW5nO1xyXG59XHJcblxyXG5jbGFzcyBQcm9kdWN0TW9kZWwge1xyXG4gICAgYXN5bmMgY3JlYXRlKHByb2R1Y3Q6IFByb2R1Y3QpOiBQcm9taXNlPFByb2R1Y3Q+IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBwb29sLnF1ZXJ5KFxyXG4gICAgICAgICAgICAnSU5TRVJUIElOVE8gcHJvZHVjdHMgKG5hbWUsIHByaWNlLCBjYXRlZ29yeSkgVkFMVUVTICgkMSwgJDIsICQzKSBSRVRVUk5JTkcgKicsXHJcbiAgICAgICAgICAgIFtwcm9kdWN0Lm5hbWUsIHByb2R1Y3QucHJpY2UsIHByb2R1Y3QuY2F0ZWdvcnldXHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0LnJvd3NbMF07XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZmluZEFsbCgpOiBQcm9taXNlPFByb2R1Y3RbXT4ge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHBvb2wucXVlcnkoJ1NFTEVDVCAqIEZST00gcHJvZHVjdHMnKTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0LnJvd3M7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZmluZEJ5SWQoaWQ6IG51bWJlcik6IFByb21pc2U8UHJvZHVjdCB8IG51bGw+IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBwb29sLnF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIHByb2R1Y3RzIFdIRVJFIGlkID0gJDEnLCBbaWRdKTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0LnJvd3NbMF0gfHwgbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IFByb2R1Y3RNb2RlbCgpO1xyXG5cclxuIiwiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCB7IGNyZWF0ZU9yZGVyLCBnZXRBbGxPcmRlcnMsIGdldE9yZGVyQnlJZCB9IGZyb20gJy4uL2NvbnRyb2xsZXJzL29yZGVyQ29udHJvbGxlcic7XHJcblxyXG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xyXG5cclxucm91dGVyLnBvc3QoJy8nLCBjcmVhdGVPcmRlcik7XHJcbnJvdXRlci5nZXQoJy8nLCBnZXRBbGxPcmRlcnMpO1xyXG5yb3V0ZXIuZ2V0KCcvOmlkJywgZ2V0T3JkZXJCeUlkKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcclxuIiwiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCB7IGNyZWF0ZVByb2R1Y3QsIGdldEFsbFByb2R1Y3RzLCBnZXRQcm9kdWN0QnlJZCB9IGZyb20gJy4uL2NvbnRyb2xsZXJzL3Byb2R1Y3RDb250cm9sbGVyJztcclxuXHJcbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XHJcblxyXG5yb3V0ZXIucG9zdCgnLycsIGNyZWF0ZVByb2R1Y3QpO1xyXG5yb3V0ZXIuZ2V0KCcvJywgZ2V0QWxsUHJvZHVjdHMpO1xyXG5yb3V0ZXIuZ2V0KCcvOmlkJywgZ2V0UHJvZHVjdEJ5SWQpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xyXG4iLCJpbXBvcnQgZXhwcmVzcywgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgKiBhcyBkb3RlbnYgZnJvbSAnZG90ZW52JztcclxuaW1wb3J0IHByb2R1Y3RSb3V0ZXMgZnJvbSAnLi9yb3V0ZXMvcHJvZHVjdFJvdXRlcyc7XHJcbmltcG9ydCBvcmRlclJvdXRlcyBmcm9tICcuL3JvdXRlcy9vcmRlclJvdXRlcyc7XHJcblxyXG5cclxuLy8gTG9hZCBlbnZpcm9ubWVudCB2YXJpYWJsZXMgZnJvbSAuZW52IGZpbGVcclxuZG90ZW52LmNvbmZpZygpO1xyXG5cclxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xyXG5jb25zdCBQT1JUID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCAzMDAwO1xyXG5cclxuLy8gTWlkZGxld2FyZSB0byBwYXJzZSBKU09OIGJvZGllc1xyXG5hcHAudXNlKGV4cHJlc3MuanNvbigpKTtcclxuXHJcbi8vIFJvdXRlIGRlZmluaXRpb25zXHJcbmFwcC51c2UoJy9wcm9kdWN0cycsIHByb2R1Y3RSb3V0ZXMpO1xyXG5hcHAudXNlKCcvb3JkZXJzJywgb3JkZXJSb3V0ZXMpO1xyXG5cclxuLy8gQmFzaWMgcm91dGUgZm9yIGhlYWx0aCBjaGVja1xyXG5hcHAuZ2V0KCcvJywgKF9yZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICAgIHJlcy5zZW5kKCdBUEkgaXMgcnVubmluZycpO1xyXG59KTtcclxuXHJcbi8vIFN0YXJ0IHRoZSBzZXJ2ZXJcclxuYXBwLmxpc3RlbihQT1JULCAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhgU2VydmVyIGlzIHJ1bm5pbmcgb24gcG9ydCAke1BPUlR9YCk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXBwO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkb3RlbnZcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwZ1wiKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvc2VydmVyLnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9