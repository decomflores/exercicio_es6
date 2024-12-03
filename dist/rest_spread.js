"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _console;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toArray(r) { return _arrayWithHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
// function somar() {
//     let soma = 0;

//     for (let i = 0; i < arguments.length; i++){
//         soma += arguments[i];
//     }

//     return soma;
// }

// console.log(somar(10, 20, 30))

// Rest
function somarRest() {
  for (var _len = arguments.length, numeros = new Array(_len), _key = 0; _key < _len; _key++) {
    numeros[_key] = arguments[_key];
  }
  var soma = numeros.reduce(function (total, numAtual) {
    total += numAtual;
    return total;
  }, 0);
  return soma;
}
console.log(somarRest(10, 20, 30, 40, 50));

// Spread
var num = [1, 2, 3, 4, 5];
(_console = console).log.apply(_console, num);
var timesSp = ['santos', 'palmeiras', 'bragantino', 'sao paulo'];
var timesRio = ['vasco', 'botafogo', 'flamengo', 'fluminense'];
var timesTodos = [].concat(timesSp, timesRio);
var _timesTodos = _toArray(timesTodos),
  item1 = _timesTodos[0],
  item2 = _timesTodos[1],
  item3 = _timesTodos[2],
  outrosTimes = _timesTodos.slice(3);
console.log(timesTodos);
console.log(item1);
console.log(item2);
console.log(item3);
console.log(outrosTimes);
var carroJulia = {
  modelo: 'gol',
  marca: 'vw',
  motor: 1.6
};
var carroAna = _objectSpread(_objectSpread({}, carroJulia), {}, {
  motor: 1.8
});
console.log("O carro da Julia \xE9 ".concat(carroJulia.modelo, ", da marca ").concat(carroJulia.marca, " e com motor de ").concat(carroJulia.motor));
console.log("O carro da Ana \xE9 ".concat(carroAna.modelo, ", da marca ").concat(carroAna.marca, " e com motor de ").concat(carroAna.motor));

// desestruturação

var motorAna = carroAna.motor;
var motorJulia = carroJulia.motor;
console.log(motorJulia);
console.log(motorAna);