System.register(['angular2/http', 'angular2/core', 'rxjs/Rx'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var http_1, core_1;
    var EmployeeDataService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {}],
        execute: function() {
            //signifies the class will be part of the DI plan
            EmployeeDataService = (function () {
                function EmployeeDataService(http) {
                    this.http = http;
                    this.employees = [];
                }
                EmployeeDataService.prototype.getEmployees = function () {
                    return this.http.get('http://localhost:3000/employees')
                        .map(function (res) {
                        console.log(res);
                        return res.json();
                    });
                };
                EmployeeDataService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], EmployeeDataService);
                return EmployeeDataService;
            }());
            exports_1("EmployeeDataService", EmployeeDataService);
        }
    }
});
//# sourceMappingURL=employees-data.service.js.map