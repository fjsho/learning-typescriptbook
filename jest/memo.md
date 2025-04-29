### learning
- jestはjavascriptのテストランナー（testを実行するツール）
- ts-jestはtypescriptをトランスパイルすることで、typescriptのコードをjestでテストできるようにするための補助ツール
- テスト対象の関数は exportする必要がある
- ファイル名が`.check.ts`で終わるファイルがテスト実行対象になる。


### memo
ファイル解説
```
├── isZero.ts ... テスト対象ファイル
├── isZero.test.ts ... テストコードのファイル
├── jest.config.js ... Jestの設定ファイル
├── node_modules ... jestやtypescriptがインストールされたフォルダ
├── package.json
├── tsconfig.json ... TypeScriptの設定ファイル
└── yarn.lock
```
