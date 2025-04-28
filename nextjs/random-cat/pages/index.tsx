import {GetServerSideProps, NextPage} from 'next';
import { useState, useEffect } from 'react';
import styles from './index.module.css';

// getServerSidePropsから渡されるpropsの型
type Props = {
    initialImageUrl: string;
}

//ページコンポーネント関数にpropsを受け取る引数を追加
const IndexPage: NextPage<Props> = ({initialImageUrl}) => {
    // useStateを用いた状態の定義
    const [imageUrl, setImageUrl] = useState(initialImageUrl); 
    const [loading, setLoading] = useState(false); // ローディング中（API呼び出し中）かどうかの状態

    // ボタンをクリックした時に画像を読み込む処理
    const handleClick = async () => {
        setLoading(true); // ローディング中にする
        const newImage = await fetchImage();
        setImageUrl(newImage.url);
        setLoading(false); // ローディング終了
    };

    // ローディング中じゃなければ画像を表示する
    return (
        <div className={styles.pages}>
            <button onClick={handleClick} className={styles.button}>他のにゃんこもみる</button>
            <div>{loading || <img src={imageUrl} className={styles.frame} />}</div>
        </div>

    );
};

export const getServerSideProps: GetServerSideProps = async () => {
    // サーバーサイドで画像を取得
    const image = await fetchImage();
    return {
        props: {
            initialImageUrl: image.url,
        },
    };
}

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