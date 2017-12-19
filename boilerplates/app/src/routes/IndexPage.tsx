import * as React from 'react';
import { connect } from 'dva';

import MapUtil from '../utils/map';
import * as styles from './IndexPage.css';

class IndexPage extends React.Component {

  private viewDiv: HTMLDivElement = null;

  componentDidMount() {
    MapUtil.instance.create(this.viewDiv);
  }

  render() {
    return (
      <div ref={node => { this.viewDiv = node; }} className={styles.viewDiv}>
      </div>
    );
  }
}

export default connect()(IndexPage);