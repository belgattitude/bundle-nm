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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var gluegun_1 = require("gluegun");
var src = gluegun_1.filesystem.path(__dirname, '..');
var cli = function (cmd) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, gluegun_1.system.run('node ' + gluegun_1.filesystem.path(src, 'bin', 'bundle-nm-cli') + (" " + cmd))];
}); }); };
test('outputs version', function () { return __awaiter(void 0, void 0, void 0, function () {
    var output;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, cli('--version')];
            case 1:
                output = _a.sent();
                expect(output).toContain('0.0.1');
                return [2 /*return*/];
        }
    });
}); });
test('outputs help', function () { return __awaiter(void 0, void 0, void 0, function () {
    var output;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, cli('--help')];
            case 1:
                output = _a.sent();
                expect(output).toContain('0.0.1');
                return [2 /*return*/];
        }
    });
}); });
test('generates file', function () { return __awaiter(void 0, void 0, void 0, function () {
    var output, foomodel;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, cli('generate foo')];
            case 1:
                output = _a.sent();
                expect(output).toContain('Generated file at models/foo-model.ts');
                foomodel = gluegun_1.filesystem.read('models/foo-model.ts');
                expect(foomodel).toContain("module.exports = {");
                expect(foomodel).toContain("name: 'foo'");
                // cleanup artifact
                gluegun_1.filesystem.remove('models');
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpLWludGVncmF0aW9uLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjbGktaW50ZWdyYXRpb24udGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1DQUEyQztBQUUzQyxJQUFNLEdBQUcsR0FBRyxvQkFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUE7QUFFNUMsSUFBTSxHQUFHLEdBQUcsVUFBTSxHQUFHO0lBQ25CLHNCQUFBLGdCQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBRyxvQkFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLGVBQWUsQ0FBQyxJQUFHLE1BQUksR0FBSyxDQUFBLENBQUMsRUFBQTtTQUFBLENBQUE7QUFFaEYsSUFBSSxDQUFDLGlCQUFpQixFQUFFOzs7O29CQUNQLHFCQUFNLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBQTs7Z0JBQS9CLE1BQU0sR0FBRyxTQUFzQjtnQkFDckMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQTs7OztLQUNsQyxDQUFDLENBQUE7QUFFRixJQUFJLENBQUMsY0FBYyxFQUFFOzs7O29CQUNKLHFCQUFNLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBQTs7Z0JBQTVCLE1BQU0sR0FBRyxTQUFtQjtnQkFDbEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQTs7OztLQUNsQyxDQUFDLENBQUE7QUFFRixJQUFJLENBQUMsZ0JBQWdCLEVBQUU7Ozs7b0JBQ04scUJBQU0sR0FBRyxDQUFDLGNBQWMsQ0FBQyxFQUFBOztnQkFBbEMsTUFBTSxHQUFHLFNBQXlCO2dCQUV4QyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLHVDQUF1QyxDQUFDLENBQUE7Z0JBQzNELFFBQVEsR0FBRyxvQkFBVSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBO2dCQUV2RCxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLG9CQUFvQixDQUFDLENBQUE7Z0JBQ2hELE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUE7Z0JBRXpDLG1CQUFtQjtnQkFDbkIsb0JBQVUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUE7Ozs7S0FDNUIsQ0FBQyxDQUFBIn0=