"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResponse = exports.UserPasswordInput = exports.DeletePostInput = exports.UpdatePostInput = exports.CreatePostInput = void 0;
const type_graphql_1 = require("type-graphql");
const User_1 = require("./entities/User");
let CreatePostInput = class CreatePostInput {
};
exports.CreatePostInput = CreatePostInput;
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CreatePostInput.prototype, "title", void 0);
exports.CreatePostInput = CreatePostInput = __decorate([
    (0, type_graphql_1.InputType)()
], CreatePostInput);
let UpdatePostInput = class UpdatePostInput {
};
exports.UpdatePostInput = UpdatePostInput;
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], UpdatePostInput.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdatePostInput.prototype, "title", void 0);
exports.UpdatePostInput = UpdatePostInput = __decorate([
    (0, type_graphql_1.InputType)()
], UpdatePostInput);
let DeletePostInput = class DeletePostInput {
};
exports.DeletePostInput = DeletePostInput;
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], DeletePostInput.prototype, "id", void 0);
exports.DeletePostInput = DeletePostInput = __decorate([
    (0, type_graphql_1.InputType)()
], DeletePostInput);
let UserPasswordInput = class UserPasswordInput {
};
exports.UserPasswordInput = UserPasswordInput;
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], UserPasswordInput.prototype, "username", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], UserPasswordInput.prototype, "password", void 0);
exports.UserPasswordInput = UserPasswordInput = __decorate([
    (0, type_graphql_1.InputType)()
], UserPasswordInput);
let FieldError = class FieldError {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], FieldError.prototype, "field", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], FieldError.prototype, "message", void 0);
FieldError = __decorate([
    (0, type_graphql_1.ObjectType)()
], FieldError);
let UserResponse = class UserResponse {
};
exports.UserResponse = UserResponse;
__decorate([
    (0, type_graphql_1.Field)(() => [FieldError], { nullable: true }),
    __metadata("design:type", Array)
], UserResponse.prototype, "errors", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => User_1.User, { nullable: true }),
    __metadata("design:type", User_1.User)
], UserResponse.prototype, "user", void 0);
exports.UserResponse = UserResponse = __decorate([
    (0, type_graphql_1.ObjectType)()
], UserResponse);
//# sourceMappingURL=types.js.map