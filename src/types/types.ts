import { Key, ReactNode } from "react";

 interface MenuItemAppBar {
  id: Key,
  label: String,
  route?: String,
  action?: VoidFunction
}

 interface Information {
  id: Key,
  label: String,
  icon: ReactNode
}

interface MenuFooter {
  id: Key, label: String
}

interface Logo {
  id: Key, imgSrc: any
}

interface ModalBase {
  open: boolean,
  handleClose: VoidFunction,
  title: string,
  action: React.ReactNode
}

export type {
  MenuItemAppBar, Information, MenuFooter, Logo, ModalBase
}