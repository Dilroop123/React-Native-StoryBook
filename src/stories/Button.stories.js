
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions'
import { LogIn } from '../components/LogIn'
import { View, Text } from 'react-native';


const buttonStories = storiesOf('Buttons', module);


buttonStories.add('default view', () => (
    // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <View style={{ flex: 1 }}>


        <LogIn />
    </View>

));

