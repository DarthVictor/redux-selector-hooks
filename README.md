# redux-selector-hooks

Common React hooks to be used with Redux

## useCreateSelector

Usefull hook for passing component props inside selector

```js
// At first, write function which takes props and returns selector
const createItemSelector = (itemIdx: string) => (state: RootState) =>
  state.items[itemIdx];

// You may use it inside component without manual memoization
const itemState = useCreateSelector([props.itemId], createItemSelector);
```
