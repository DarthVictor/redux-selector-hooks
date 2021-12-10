'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');
var reactRedux = require('react-redux');

var useCreateSelector = function (creatorSelector, dependencies, isEqualFn) {
    var selector = react.useMemo(function () { return creatorSelector.apply(void 0, dependencies); }, [dependencies, creatorSelector]);
    return reactRedux.useSelector(selector, isEqualFn);
};

exports.useCreateSelector = useCreateSelector;
