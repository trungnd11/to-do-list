import Button from "@atlaskit/button";
import React from "react";
import styled, { css } from "styled-components";
import CheckIcon from "@atlaskit/icon/glyph/check";
import EditorRemoveIcon from '@atlaskit/icon/glyph/editor/remove';

const ButtonStyled = styled(Button)`
  margin-top: 20px;
  text-align: left;

  &,
  &:hover {
    ${(p) =>
      p.isCompleted &&
      css`
        text-decoration: line-through;
      `}
  }

  &:hover {
    .show-icon {
      display: inline-block;
    }
  }

  .show-icon {
    display: none;

    &:hover {
      background-color: #e2e2e2;
      border-radius: 3px;
    }
  }
`;

export default function Todo({ todo, onCheckBtnClick, onDeleteBtnClick}) {
  return (
    <ButtonStyled
      isCompleted={todo.isCompleted}
      shouldFitContainer
      iconBefore={
        !todo.isCompleted && (
          <span className='show-icon' onClick={() => onCheckBtnClick(todo.id)}>
            <CheckIcon primaryColor='#4fff4f' />
          </span>
        )
      }

      iconAfter={
        (
          <span className='show-icon' onClick={() => onDeleteBtnClick(todo.id)}>
            <EditorRemoveIcon primaryColor='#FF0000' />
          </span>
        )
      }
    >
      {todo.name}
    </ButtonStyled>
  );
}
