# global-jsdom + CustomEvent + Node 20 が落ちる再現

## 対策

### 対策1

see: https://github.com/yamachu/jsdom-with-window-prefix/pull/1

vitest を使っているのであれば、global-jsdom を使わないで、

```ts
// @vitest-environment jsdom
```

みたいに [vitest-environment](https://vitest.dev/config/#environment) に乗っかる

### 対策2

see: https://github.com/yamachu/jsdom-with-window-prefix/pull/2

global-jsdom を使うなら、ブラウザに実装されている API では `window.` を付けて、jsdom から渡っている API を使用しているという様に明示する

```diff
- new CustomEvent('foo')
+ new window.CustomEvent('foo')
```
