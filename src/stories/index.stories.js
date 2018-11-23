import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import backgrounds from "@storybook/addon-backgrounds";

import Button from "../components/Button";

const actions = {
  onClick: action("clicked")
};
// addDecorator은 스토리북을 편하게 보기 위한 스타일을 적용하기 위한 기능이다.
// 스타일과 여러가지 배경색을 테스트해볼 수 있다.
storiesOf("Button", module)
  .addDecorator(
    backgrounds([
      { name: "white", value: "#fff", default: true },
      { name: "blooming dahlia", value: "#ec9787" },
      { name: "ultra violet", value: "#645394" }
    ])
  )
  .add("Rounded Button", () => <Button style={"round"} {...actions} />)
  .add("Sharp Button", () => <Button style={"sharp"} {...actions} />)
  .add("hover", () => <Button {...actions} hover={true} />);
