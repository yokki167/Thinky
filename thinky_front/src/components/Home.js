import React from 'react';
import Button from '@material-ui/core/Button';
import HomeCss from '../styles/Home.module.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';




const Home = () => {
  return (
    <Router>
      <div className={HomeCss.home}>
        <div className={HomeCss.container}>
          <div className={HomeCss.btnWrapper}>
            <Button variant="contained" color="primary" className={HomeCss.btn}>"Why"を考える</Button>
            <Button variant="contained" color="primary" className={HomeCss.btn}>みんなの"Y"を考える</Button>
            <Button variant="contained" color="primary" className={HomeCss.btn}>マイページ</Button>
          </div>
        </div>
      </div>
    </Router>
  )

}

export default Home;