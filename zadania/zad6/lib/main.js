"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } _setPrototypeOf(subClass.prototype, superClass && superClass.prototype); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.getPrototypeOf || function _getPrototypeOf(o) { return o.__proto__; }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Pencil =
/*#__PURE__*/
function () {
  function Pencil(name, type, hardness, color, quantity) {
    _classCallCheck(this, Pencil);

    this.name = name;
    this.type = type;
    this.hardness = hardness;
    this.color = color;
    this.quantity = quantity;
  }

  _createClass(Pencil, [{
    key: "toString",
    value: function toString() {
      return "".concat(this.name, " | qty: ").concat(this.quantity, " pcs");
    }
  }, {
    key: "print",
    value: function print() {
      console.log(this.toString());
    }
  }, {
    key: "add_qty",
    value: function add_qty(x) {
      //this.quantity = Number(1) + Number(this.quantity);
      this.quantity = +x + +this.quantity;
    }
  }, {
    key: "quantit",
    set: function set(qty) {
      this.quantity = qty;
    }
  }]);

  return Pencil;
}();

var CPencil =
/*#__PURE__*/
function (_Pencil) {
  function CPencil(name, type, hardness, color, quantity, width) {
    var _this;

    _classCallCheck(this, CPencil);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CPencil).call(this, name, type, hardness, color, quantity));
    _this.width = width;
    return _this;
  }

  _createClass(CPencil, [{
    key: "print2",
    value: function print2() {
      console.log("".concat(this.name, " with width: ").concat(this.width));
    }
  }]);

  _inherits(CPencil, _Pencil);

  return CPencil;
}(Pencil);

var olowek = new Pencil('Olowek', 'regular', 'HB', 'blue', 10); //console.log(olowek.name);

olowek.print();
olowek.add_qty(5);
olowek.print();
olowek.quantit = 5;
olowek.print();
var Stolarza = new CPencil('Stolarski', 'specjal', 'HBB', 'blue', 1, 0.25);
Stolarza.print();
Stolarza.print2();