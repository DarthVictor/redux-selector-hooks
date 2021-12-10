import { useMemo } from "react";
import { useSelector } from "react-redux";

export const useCreateSelector = <
  DependencyList extends readonly any[],
  RootState = {},
  Selected = unknown
>(
  creatorSelector: (
    ...dependencies: DependencyList
  ) => (state: RootState) => Selected,
  dependencies: DependencyList,
  isEqualFn?: (left: Selected, right: Selected) => boolean
): Selected => {
  const selector = useMemo(
    () => creatorSelector(...dependencies),
    [...dependencies, creatorSelector]
  );

  return useSelector(selector, isEqualFn);
};
