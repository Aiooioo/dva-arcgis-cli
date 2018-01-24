import React from 'react';
import { connect } from 'dva';

import env from '../utils/env';
import styles from './IndexPage.css';

class IndexPage extends React.Component {

  constructor(props) {
    super(props);

    this.viewDiv = null;
  }

  componentDidMount() {
    const { dispatch } = this.props;

    dispatch({
      type: 'agsmap/init',
      payload: {
        container: this.viewDiv,
        webscene: env.getWebSceneID(),
        basemap: 'osm',
      },
    });
  }

  render() {
    return (
      <div ref={(node) => { this.viewDiv = node; }} className={styles.viewDiv} />
    );
  }
}

export default connect()(IndexPage);
