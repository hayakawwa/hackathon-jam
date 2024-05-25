import styles from './Tag.module.scss'
import React from "react";

interface TagProps {
  children?: string
  className?: string
}

export default function Tag({children, className}: TagProps) {
  return <p className={`${styles.tag} ${className}`}>{children}</p>
}