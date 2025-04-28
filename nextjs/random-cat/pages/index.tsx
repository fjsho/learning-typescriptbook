import {NextPage} from 'next';
import { useState, useEffect } from 'react';

const IndexPage: NextPage = () => {
    // useStateを用いた状態の定義
    const [imageUrl, setImageUrl] = useState("");
    const [loading, setLoading] = useState(true); // ローディング中（API呼び出し中）かどうかの状態

    // マウント時に画像を読み込む宣言
    useEffect(
        // 第一引数は実行する関数。無名関数を実行している。
        // useEffectは非同期関数（async()）を直接受け取れないので、無名関数を定義してその中でasync関数を実行する。
        () => {
        fetchImage().then((newImage) => {
            setImageUrl(newImage.url);
            setLoading(false);
        });
    },
        // 第二引数は処理の実行タイミングを指定する。
        // 空の配列を渡すことで、コンポーネントがマウントされた時のみ実行される。
        []
    ); 

    // ローディング中じゃなければ画像を表示する
    return <div>{loading || <img src={imageUrl} />}</div>;
};

type Image = {
    url: string;
};

const fetchImage = async (): Promise<Image> => {
    const res = await fetch("https://api.thecatapi.com/v1/images/search");
    const images = await res.json();
    console.log(images);
    return images[0];
  };

export default IndexPage;