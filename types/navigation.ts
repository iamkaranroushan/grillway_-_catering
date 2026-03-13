import { ModalType } from "@/feature/store/useModalStore";

export type NavItem =
  | {
      label: string;
      href: string;
      modal?: never;
      children?: never;
    }
  | {
      label: string;
      modal: ModalType;
      href?: never;
      children?: never;
    }
  | {
      label: string;
      children: NavItem[];
      href?: never;
      modal?: never;
    };