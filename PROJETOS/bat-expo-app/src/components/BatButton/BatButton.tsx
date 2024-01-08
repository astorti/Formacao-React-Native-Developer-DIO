import React, { useState } from 'react';
import { Text, Pressable } from 'react-native';

import { styles } from './BatButtonStyle';
import { BatTextInput } from '../BatTextInput/BatTextInput';
import generatePass from '../../services/passwordService';
import * as Clipboard from 'expo-clipboard';
import { BatTextInputCopied } from '../BatTextInputCopied/BatTextInputCopied';
import { BatPassLevelSecurity, } from '../BatPassLevelSecurity/BatPassLevelSecurity';

export function BatButton() {
  const [pass, setPass] = useState('')
  const [copy, setCopy] = useState(false)
  let copiedText = "PASSWORD COPIED!"

  function handleGenerateButton() {
    let generateToken = generatePass()
    setPass(generateToken)
    setCopy(false)
  }

  function handleCopyButton() {
    Clipboard.setStringAsync(pass)
    setCopy(true)
  }

  return (
    <>
      <BatTextInput pass={pass} />
      <BatPassLevelSecurity />
      <Pressable
        onPress={handleGenerateButton}
        style={styles.button}>
        <Text style={styles.text}>GENERATE</Text>
      </Pressable>

      <Pressable
        onPress={handleCopyButton}
        style={styles.button}>
        <Text style={styles.text}>⚡COPY</Text>
      </Pressable>
      {copy ? <BatTextInputCopied copy={copiedText} /> : null}
    </>
  );
}