"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class ProxySDK {
    constructor(baseURL, userApiKey) {
        this.client = axios_1.default.create({
            baseURL,
            headers: {
                'Content-Type': 'application/json',
                'user-api-key': userApiKey, // Thêm user API key vào header
            },
        });
    }
    getProvinces(searchText) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.client.get('/api/client/provinces', {
                params: { search_text: searchText },
            });
            return response.data;
        });
    }
    getNewIP(proxyKey, provinceId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.client.get('/api/client/proxy/available', {
                params: { proxy_key: proxyKey, province_id: provinceId },
            });
            return response.data;
        });
    }
    getCurrentIP(proxyKey) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.client.get('/api/client/proxy/current', {
                params: { proxy_key: proxyKey },
            });
            return response.data;
        });
    }
    removeOldIP(proxyKey) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.client.post('/api/client/proxy/remove', {
                proxy_key: proxyKey,
            });
            return response.data;
        });
    }
    getKeyList() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.client.get('/api/client/key/list');
            return response.data;
        });
    }
    getKeyDetail(proxyKey) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.client.get('/api/client/key/detail', {
                params: { proxy_key: proxyKey },
            });
            return response.data;
        });
    }
    buyNewKey(buyKeyDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.client.post('/api/client/key/buy', buyKeyDto);
            return response.data;
        });
    }
    renewKey(renewKeyDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.client.post('/api/client/key/renewal', renewKeyDto);
            return response.data;
        });
    }
    removeKey(proxyKey) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.client.post('/api/client/key/remove', {
                proxy_key: proxyKey,
            });
            return response.data;
        });
    }
    getUserInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.client.get('/api/client/user/current');
            return response.data;
        });
    }
}
exports.default = ProxySDK;
