"use strict";

function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// const pessoa = {
//     nome: "André",
//     idade: 31,
//     saudacao() {
//         console.log(`Olá, meu nome é ${this.nome}`);
//     }
// };
// pessoa.saudacao(); // Olá, meu nome é André
// class Pessoa {
//     constructor(nome, idade) {
//         this.nome = nome;
//         this.idade = idade;
//     }
//     saudacao() {
//         console.log(`Olá, meu nome é ${this.nome}`);
//     }
// }
// const pessoa1 = new Pessoa("André", 31);
// const pessoa2 = new Pessoa('Joao', 28);
// pessoa2.saudacao();
// pessoa1.saudacao(); // Olá, meu nome é André
var Animal = /*#__PURE__*/function () {
  function Animal(nome) {
    _classCallCheck(this, Animal);
    this.nome = nome;
  }
  return _createClass(Animal, [{
    key: "falar",
    value: function falar() {
      console.log("".concat(this.nome, " faz um som"));
    }
  }]);
}();
var Cachorro = /*#__PURE__*/function (_Animal) {
  function Cachorro(nome, raca) {
    var _this;
    _classCallCheck(this, Cachorro);
    _this = _callSuper(this, Cachorro, [nome]); // Chama o construtor da classe pai (Animal)
    _this.raca = raca;
    return _this;
  }
  _inherits(Cachorro, _Animal);
  return _createClass(Cachorro, [{
    key: "falar",
    value: function falar() {
      console.log("".concat(this.nome, " latindo!"));
    }
  }]);
}(Animal);
var cachorro = new Cachorro("Rex", "Labrador");
cachorro.falar(); // Rex latindo!
var Carro = /*#__PURE__*/_createClass(function Carro(marca, modelo) {
  _classCallCheck(this, Carro);
  this.marca = marca;
  this.modelo = modelo;
  var velocidade = 0; // propriedade privada

  this.acelerar = function () {
    velocidade += 10;
    console.log("Acelerando: ".concat(velocidade, " km/h"));
  };
  this.getVelocidade = function () {
    return velocidade;
  };
});
var meuCarro = new Carro("Fiat", "Uno");
meuCarro.acelerar(); // Acelerando: 10 km/h
console.log(meuCarro.getVelocidade()); // 10