import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: '自作CPU',
    image: '/img/riscv-cpu.jpeg',
    description: (
      <>
        RISC-V で作るおれおれCPU <br></br>
        記事制作中。現在 Verilog コードのみ。
      </>
    ),
    url: 'https://github.com/dokunira/rv32i_zicsr_3stage_pipeline',  // CPUカテゴリーのURLに適宜変更
  },
  {
    title: '自作キーボード',
    image: '/img/patamana-keyboard.jpeg',
    description: (
      <>
        左右分離型のエルゴノミクスキーボード
      </>
    ),
    url: 'https://patamana.com/',  // キーボードカテゴリーのURLに適宜変更
  },
  {
    title: '自作インジケーター',
    image: '/img/pb-cloud.png',
    description: (
      <>
        MT4用のカスタムインジケーター
      </>
    ),
    url: 'https://www.gogojungle.co.jp/users/658053',  // インジケーターカテゴリーのURLに適宜変更
  },
  {
    title: 'ブログ',
    image: '/img/dokunira-site-top.png',
    description: (
      <>
        Docusaurus を使用した テックブログ & ポートフォリオサイト
      </>
    ),
    url: '/',  // Reactカテゴリーのページに適宜変更
  },
];

function Feature({image, title, description, url}) {
  return (
    <div className={clsx('col col--4')}>
      <Link to={url} className={styles.featureLink}>
        <div className={styles.featureItem}>
          <div className="text--center">
            <img src={image} className={styles.featureImg} alt={title} />
          </div>
          <div className="text--center padding-horiz--md">
            <Heading as="h3">{title}</Heading>
            <p>{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}