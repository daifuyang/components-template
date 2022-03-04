import styles from './index.less';
import  Demo from '@gincmf/demo';

export default function IndexPage() {
  return (
    <div>
      <Demo />
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
}
