import React from 'react'

import { Helmet } from 'react-helmet'

import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Forward Markets Executive</title>
        <meta property="og:title" content="Forward Markets Executive" />
      </Helmet>
    </div>
  )
}

export default Home
