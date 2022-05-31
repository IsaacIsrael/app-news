import React, { useState } from 'react';
import {  StyleSheet, View } from 'react-native';
import { Color } from '../constants/Color';
import { Sizes } from '../constants/Sizes';
import Touchable from './button/Touchable';
import Body from './texts/Body';

const styles = StyleSheet.create({
  button: {
    marginRight: Sizes.GUTTER,
    marginTop:Sizes.GUTTER,
    padding: Sizes.GUTTER * 0.5,
    borderColor: Color.BLACK,
    borderWidth: 1,
    borderRadius: 4,
  },
  buttonSelected: {
    backgroundColor: Color.BLACK,
  },
  buttonTextSelected:{
    color: Color.WHITE,
  },
});

type Props={
    category:string;
    onSelected?: (selected: boolean)=> void;
}

const CategoryItem: React.FC<Props> = ({ category, onSelected}) => {
  const  [selected, setSelected]= useState<boolean>(false) 

  const onPress = ()=>{
    setSelected(!selected);

    if(onSelected){
      onSelected(!selected);
    }
  }

  return (
      <Touchable style={[styles.button, selected &&  styles.buttonSelected]} onPress={onPress} activeOpacity={1}>
        <Body style={[selected &&  styles.buttonTextSelected]}>{category}</Body>
      </Touchable>
  );
};

export default CategoryItem;
