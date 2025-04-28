# TypeScript Next.js の例

これは、TypeScript を使用した Next.js の使い方を示す非常にシンプルなプロジェクトです。

## 自分でデプロイする

[![Vercel でデプロイ](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-typescript&project-name=with-typescript&repository-name=with-typescript)

## 使い方

[npm](https://docs.npmjs.com/cli/init)、[Yarn](https://yarnpkg.com/lang/en/docs/cli/create/)、または [pnpm](https://pnpm.io) を使用して [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) を実行し、この例をブートストラップします:

```bash
npx create-next-app --example with-typescript with-typescript-app
```

```bash
yarn create next-app --example with-typescript with-typescript-app
```

```bash
pnpm create next-app --example with-typescript with-typescript-app
```

[Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) にデプロイしてクラウド上で実行できます ([ドキュメント](https://nextjs.org/docs/deployment))。

## 注意事項

この例は、TypeScript の型システムを Next.js に統合する方法を示しています。Next.js では TypeScript が標準でサポートされているため、必要なのは TypeScript をインストールすることだけです。

```shell
npm install --save-dev typescript
```

```shell
yarn install --save-dev typescript
```

```shell
pnpm install --save-dev typescript
```

TypeScript の機能を有効にするには、React と Node の型定義をインストールします。

```shell
npm install --save-dev @types/react @types/react-dom @types/node
```

```shell
yarn install --save-dev @types/react @types/react-dom @types/node
```

```shell
pnpm install --save-dev @types/react @types/react-dom @types/node
```

次回 `next dev` を実行すると、Next.js はプロジェクト内の `.ts` または `.tsx` ファイルを探してビルドを開始します。また、推奨設定が記載された `tsconfig.json` ファイルが自動的に作成されます。

Next.js には組み込みの TypeScript 宣言があるため、Next.js のモジュールに対してすぐに補完機能が利用できます。

`package.json` には `type-check` スクリプトも追加されており、TypeScript の `tsc` CLI を `noEmit` モードで実行して型チェックを個別に行います。これを `test` スクリプトなどに含めることができます。
