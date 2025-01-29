'use client'
import React, { useState } from 'react'
import styles from '../(Styles)/home.module.css'
import Filter from './Filter'

function SideBar() {
    


  return (
    <div>
      <div className={styles.filter}>
          <Filter />
        </div>
    </div>
  )
}

export default SideBar
