import React from "react";
import { storiesOf } from "@storybook/react";
import Input from "../components/Input.jsx";

storiesOf('Input', module)
  .add('with default value', () => (<Input value={'sai'} />))
  .add('with no value', () => (<Input/>))
  .add('with onchange handler', () => <Input onChange={(value) => {console.log(value);}}/> )
  .add('with placeholder', () => <Input placeholder={'hi i am a placeholder'}/> )
  .add('with a text type', () => <Input type={'text'}/> )
  .add('with a number type', () => <Input type={'number'}/> )
  .add('with a date type', () => <Input type={'date'}/> );