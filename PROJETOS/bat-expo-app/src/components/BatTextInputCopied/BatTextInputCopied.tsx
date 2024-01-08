import React from 'react';
import { TextInput } from 'react-native';

import { styles } from './BatTextInputCopiedStyle';

interface BatTextInputCopiedProps{
  copy: string
}

export function BatTextInputCopied(props: BatTextInputCopiedProps) {
  return (
      <TextInput
        style={styles.inputer}
        value={props.copy}
      />
  );
}