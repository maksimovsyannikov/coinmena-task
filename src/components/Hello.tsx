import React, { FunctionComponent } from 'react';
import styles from './styles.css';

export interface HelloProps {
  name: string;
}

export const Hello: FunctionComponent<HelloProps> = ({ name }) =>
  <h1 className={styles.counter}>{ name }</h1>;

