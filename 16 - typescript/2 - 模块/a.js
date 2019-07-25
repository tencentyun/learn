/**
 * Created by lenovo on 2018/3/13.
 */
// export为当前模块对外暴露的东西
define(["require", "exports"], function (require, exports) {
    exports.prop1;
    var prop2;
    function func1() {
    }
    exports.func1 = func1;
    function func2() {
    }
    var Clazz1 = (function () {
        function Clazz1() {
        }
        return Clazz1;
    })();
    exports.Clazz1 = Clazz1;
    var Clazz2 = (function () {
        function Clazz2() {
        }
        return Clazz2;
    })();
});
//# sourceMappingURL=a.js.map