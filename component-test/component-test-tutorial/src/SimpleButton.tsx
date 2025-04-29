import { useState } from 'react'

// ON/OFFを切り替えることができるシンプルなボタン
export const SimpleButton = () => {
    // useStateを用いた状態の定義
    const [state, setState] = useState(true);
    // clickHandlerの定義
    const handleClick = () => {
        setState((prevState) => !prevState);
    };
    // クリックで切り替わるボタンの描画
    return (
        <button onClick={handleClick}>
            {state ? "ON" : "OFF"}
        </button>
    );
};
