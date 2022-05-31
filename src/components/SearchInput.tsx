import _ from 'lodash';
import React, { useCallback, useState } from 'react';
import {
  StyleSheet,
  StyleProp,
  TextStyle,
  TextInput,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  TextInputProps,
  ViewStyle,
  Keyboard,
} from 'react-native';
import { debounce } from 'redux-saga/effects';

import { Color } from '../constants/Color';
import { Sizes } from '../constants/Sizes';

const styles = StyleSheet.create({
  input: {
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: 0.25,
    color: Color.TEXT,
    backgroundColor: Color.WHITE,
    borderWidth: 0,
    width: '100%',
    padding: Sizes.GUTTER * 0.75,
  },
  inputFocus: {
    borderColor: Color.PRIMARY,
  },
});

type AFTextInputProps = {
  containerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<TextStyle>;
  onSearch?: (value: string) => void;
};

type Props = AFTextInputProps & Omit<TextInputProps, keyof AFTextInputProps>;

const SearchInput: React.FC<Props> = ({
  containerStyle,
  style,
  onFocus,
  onBlur,
  onSearch,
  ...props
}) => {
  const [focus, setFocus] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');

  const onInputFocus = (event: NativeSyntheticEvent<TextInputFocusEventData>): void => {
    setFocus(true);

    if (onFocus) {
      onFocus(event);
    }
  };
  const onInputBluer = (event: NativeSyntheticEvent<TextInputFocusEventData>): void => {
    setFocus(false);

    if (onBlur) {
      onBlur(event);
    }
  };

  const onSearchCallback = useCallback(_.debounce((nextValue)=>{
    if(!onSearch){
        return;
    }
    onSearch(nextValue);
  }, 2000), []);
 
  const onChange = (text:string) => {
    setValue(text);
    onSearchCallback(text);
 };


  return (
      <TextInput
        style={[styles.input, focus && styles.inputFocus, style]}
        keyboardType="web-search"
        placeholderTextColor={Color.TEXT}
        onFocus={onInputFocus}
        onBlur={onInputBluer}
        onChangeText={onChange}
        value={value}
        {...props}
      />
  );
};

SearchInput.defaultProps = {
  containerStyle: {},
  style: {},
  onSearch: () => undefined,
};

export default SearchInput;
