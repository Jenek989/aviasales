import { Spin } from 'antd';

import classes from './Spinner.module.scss';

const Spinner = () => (
  <div className={classes.spin}>
    <Spin />
  </div>
);

export default Spinner;
