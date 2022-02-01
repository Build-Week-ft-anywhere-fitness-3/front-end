"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var DEFAULT_COLON = ':';
var DEFAULT_VALUE_SHORT = "00" + DEFAULT_COLON + "00";
var DEFAULT_VALUE_FULL = "00" + DEFAULT_COLON + "00" + DEFAULT_COLON + "00";
function isNumber(value) {
    var number = Number(value);
    return !isNaN(number) && String(value) === String(number);
}
exports.isNumber = isNumber;
function formatTimeItem(value) {
    return ((value || '') + "00").substr(0, 2);
}
exports.formatTimeItem = formatTimeItem;
function validateTimeAndCursor(showSeconds, value, defaultValue, colon, cursorPosition) {
    if (showSeconds === void 0) { showSeconds = false; }
    if (value === void 0) { value = ''; }
    if (defaultValue === void 0) { defaultValue = ''; }
    if (colon === void 0) { colon = DEFAULT_COLON; }
    if (cursorPosition === void 0) { cursorPosition = 0; }
    var _a = defaultValue.split(colon), oldH = _a[0], oldM = _a[1], oldS = _a[2];
    var newCursorPosition = Number(cursorPosition);
    var _b = String(value).split(colon), newH = _b[0], newM = _b[1], newS = _b[2];
    newH = formatTimeItem(newH);
    if (Number(newH[0]) > 2) {
        newH = oldH;
        newCursorPosition -= 1;
    }
    else if (Number(newH[0]) === 2) {
        if (Number(oldH[0]) === 2 && Number(newH[1]) > 3) {
            newH = "2" + oldH[1];
            newCursorPosition -= 2;
        }
        else if (Number(newH[1]) > 3) {
            newH = '23';
        }
    }
    newM = formatTimeItem(newM);
    if (Number(newM[0]) > 5) {
        newM = oldM;
        newCursorPosition -= 1;
    }
    if (showSeconds) {
        newS = formatTimeItem(newS);
        if (Number(newS[0]) > 5) {
            newS = oldS;
            newCursorPosition -= 1;
        }
    }
    var validatedValue = showSeconds ? "" + newH + colon + newM + colon + newS : "" + newH + colon + newM;
    return [validatedValue, newCursorPosition];
}
exports.validateTimeAndCursor = validateTimeAndCursor;
var TimeField = /** @class */ (function (_super) {
    __extends(TimeField, _super);
    function TimeField(props) {
        var _this = _super.call(this, props) || this;
        var _showSeconds = Boolean(props.showSeconds);
        var _defaultValue = _showSeconds ? DEFAULT_VALUE_FULL : DEFAULT_VALUE_SHORT;
        var _colon = props.colon && props.colon.length === 1 ? props.colon : DEFAULT_COLON;
        var validatedTime = validateTimeAndCursor(_showSeconds, _this.props.value, _defaultValue, _colon)[0];
        _this.state = {
            value: validatedTime,
            _colon: _colon,
            _showSeconds: _showSeconds,
            _defaultValue: _defaultValue,
            _maxLength: _defaultValue.length
        };
        _this.onInputChange = _this.onInputChange.bind(_this);
        return _this;
    }
    TimeField.prototype.componentDidUpdate = function (prevProps) {
        if (this.props.value !== prevProps.value) {
            var validatedTime = validateTimeAndCursor(this.state._showSeconds, this.props.value, this.state._defaultValue, this.state._colon)[0];
            this.setState({
                value: validatedTime
            });
        }
    };
    TimeField.prototype.onInputChange = function (event, callback) {
        var oldValue = this.state.value;
        var inputEl = event.target;
        var inputValue = inputEl.value;
        var position = inputEl.selectionEnd || 0;
        var isTyped = inputValue.length > oldValue.length;
        var cursorCharacter = inputValue[position - 1];
        var addedCharacter = isTyped ? cursorCharacter : null;
        var removedCharacter = isTyped ? null : oldValue[position];
        var replacedSingleCharacter = inputValue.length === oldValue.length ? oldValue[position - 1] : null;
        var colon = this.state._colon;
        var newValue = oldValue;
        var newPosition = position;
        if (addedCharacter !== null) {
            if (position > this.state._maxLength) {
                newPosition = this.state._maxLength;
            }
            else if ((position === 3 || position === 6) && addedCharacter === colon) {
                newValue = "" + inputValue.substr(0, position - 1) + colon + inputValue.substr(position + 1);
            }
            else if ((position === 3 || position === 6) && isNumber(addedCharacter)) {
                newValue = "" + inputValue.substr(0, position - 1) + colon + addedCharacter + inputValue.substr(position + 2);
                newPosition = position + 1;
            }
            else if (isNumber(addedCharacter)) {
                // user typed a number
                newValue = inputValue.substr(0, position - 1) + addedCharacter + inputValue.substr(position + 1);
                if (position === 2 || position === 5) {
                    newPosition = position + 1;
                }
            }
            else {
                // if user typed NOT a number, then keep old value & position
                newPosition = position - 1;
            }
        }
        else if (replacedSingleCharacter !== null) {
            // user replaced only a single character
            if (isNumber(cursorCharacter)) {
                if (position - 1 === 2 || position - 1 === 5) {
                    newValue = "" + inputValue.substr(0, position - 1) + colon + inputValue.substr(position);
                }
                else {
                    newValue = inputValue;
                }
            }
            else {
                // user replaced a number on some non-number character
                newValue = oldValue;
                newPosition = position - 1;
            }
        }
        else if (typeof cursorCharacter !== 'undefined' && cursorCharacter !== colon && !isNumber(cursorCharacter)) {
            // set of characters replaced by non-number
            newValue = oldValue;
            newPosition = position - 1;
        }
        else if (removedCharacter !== null) {
            if ((position === 2 || position === 5) && removedCharacter === colon) {
                newValue = inputValue.substr(0, position - 1) + "0" + colon + inputValue.substr(position);
                newPosition = position - 1;
            }
            else {
                // user removed a number
                newValue = inputValue.substr(0, position) + "0" + inputValue.substr(position);
            }
        }
        var _a = validateTimeAndCursor(this.state._showSeconds, newValue, oldValue, colon, newPosition), validatedTime = _a[0], validatedCursorPosition = _a[1];
        this.setState({ value: validatedTime }, function () {
            inputEl.selectionStart = validatedCursorPosition;
            inputEl.selectionEnd = validatedCursorPosition;
            callback(event, validatedTime);
        });
        event.persist();
    };
    TimeField.prototype.render = function () {
        var _this = this;
        var value = this.state.value;
        var _a = this.props, onChange = _a.onChange, style = _a.style, showSeconds = _a.showSeconds, input = _a.input, inputRef = _a.inputRef, colon = _a.colon, props = __rest(_a, ["onChange", "style", "showSeconds", "input", "inputRef", "colon"]); //eslint-disable-line no-unused-vars
        var onChangeHandler = function (event) {
            return _this.onInputChange(event, function (e, v) { return onChange && onChange(e, v); });
        };
        if (input) {
            return React.cloneElement(input, __assign(__assign({}, props), { value: value,
                style: style, onChange: onChangeHandler }));
        }
        return (React.createElement("input", __assign({ type: "text" }, props, { ref: inputRef, value: value, onChange: onChangeHandler, style: __assign({ width: showSeconds ? 54 : 35 }, style) })));
    };
    TimeField.defaultProps = {
        showSeconds: false,
        input: null,
        style: {},
        colon: DEFAULT_COLON
    };
    return TimeField;
}(React.Component));
exports.default = TimeField;
