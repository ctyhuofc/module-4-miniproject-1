var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var students = /** @class */ (function () {
    function students(name, age, nationality) {
        this.name = name,
            this.age = age,
            this.gender = "Female";
        this.nationality = nationality;
    }
    students.prototype.getNationality = function () {
        console.log("student nationality is ".concat(this.nationality));
    };
    return students;
}());
;
var UnderGraduates = /** @class */ (function (_super) {
    __extends(UnderGraduates, _super);
    function UnderGraduates(name, age, nationality, batch, gpa) {
        var _this = _super.call(this, name, age, nationality) || this;
        _this.batch = batch;
        _this.gpa = gpa;
        return _this;
    }
    return UnderGraduates;
}(students));
var newUndergrad = new UnderGraduates("Chrissy", 30, "Canadian", 1, 3.0);
newUndergrad.getNationality();
console.log(newUndergrad.gender);
