import React from 'react';

export interface IButton {
  type: string;
  onClick: () => void;
  innerText: string;
}

export interface IDemoForm {
  onSubmit: () => void;
}

export interface IModal extends React.PropsWithChildren{
  show: boolean;
  title: string
  onClose: ()=> void
}
