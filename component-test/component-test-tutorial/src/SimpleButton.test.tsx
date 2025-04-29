import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SimpleButton } from "./SimpleButton";

// # testing-libraryを使ったテストの作り方とやり方
test("ボタンをクリックするとON/OFFの表示が切り替わる", async () => {
    // 1. SimpleButtonコンポーネントをレンダリング
    render(<SimpleButton />);
    // 2. ボタンを取得（WAI-ARIA）
    const simpleButton = screen.getByRole("button");
    // 3. 初期状態の期待値チェック
    expect(simpleButton).toHaveTextContent("OFF");
    // 4. ボタンをクリック
    await userEvent.click(simpleButton);
    // 5. クリック後の期待値チェック
    expect(simpleButton).toHaveTextContent("ON");
});

// # Jestを使ったスナップショットテストの作り方とやり方
test("描画されてすぐはOFFと表示されている", () => {
    const view = render(<SimpleButton />);
    expect(view.container).toMatchSnapshot();
});