import { useMemo } from 'react';
import { useSelector } from 'react-redux';

var useCreateSelector = function (creatorSelector, dependencies, isEqualFn) {
    var selector = useMemo(function () { return creatorSelector.apply(void 0, dependencies); }, [dependencies, creatorSelector]);
    return useSelector(selector, isEqualFn);
};

export { useCreateSelector };
