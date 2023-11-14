import React from 'react';

export interface IButton {
  type: string;
  onClick: () => void;
  innerText: string;
}

export interface ICustomModal extends React.PropsWithChildren {
  show: boolean;
  title: string;
  onClose: () => void;
}
export interface ICustomAlert extends React.PropsWithChildren {
  type: 'primary' | 'success' | 'danger' | 'warning';
  onDismiss?: () => void;
  show: boolean;
}
