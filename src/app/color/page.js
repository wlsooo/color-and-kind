"use client"

import MyInput from "@/components/MyInput"
import styles from "./color.module.css"

export default function ColorPage() {
    return (
      <div>
        <h1>Color Page</h1>
        <div className={styles.cssTest}>css test</div>
        <MyInput/>
      </div>
    )
  }