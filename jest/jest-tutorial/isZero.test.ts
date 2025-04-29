import { isZero } from "./isZero";

test("0を渡したらtrueになること", () => {
    const result = isZero(0); // isZero関数を呼び出す
    expect(result).toBe(true); // 期待値チェック：結果がtrueであることを確認
});

test("1を渡したらfalseになること", () => {
    const result = isZero(1); // isZero関数を呼び出す
    expect(result).toBe(false); // 期待値チェック：結果がfalseであることを確認
});
