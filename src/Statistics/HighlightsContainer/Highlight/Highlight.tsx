import React from 'react';
import styles from './highlight.scss';
import { EIcons, Icon } from '../../../icons/Icon';

interface IHighlightProps {
  name: string;
  content: string;
  icon: 'focusIcon' | 'pauseIcon' | 'stopIcon';
  bgColor?: string;
  iconColor?: string;
}

export const Highlight = ({
  name,
  content,
  icon,
  bgColor,
  iconColor,
}: IHighlightProps) => {
  return (
    <div
      className={styles.container}
      style={bgColor ? { backgroundColor: bgColor } : {}}
    >
      <h3
        className={styles.highlightHeader}
        style={bgColor ? { color: '#333' } : {}}
      >
        {name}
      </h3>
      <Icon
        name={EIcons[icon]}
        color={iconColor ? iconColor : '#c4c4c4'}
        size={108}
      />
      <p
        className={styles.highlightContent}
        style={bgColor ? { color: '#333' } : {}}
      >
        {content}
      </p>
    </div>
  );
};
