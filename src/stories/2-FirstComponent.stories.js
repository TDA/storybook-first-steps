import React from "react";
import { storiesOf } from "@storybook/react";
import Component from "../components/Component.jsx";

storiesOf('Component', module)
  .add('with default value', () => (<Component value={'sai'} />));