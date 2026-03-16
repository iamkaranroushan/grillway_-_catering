"use client";

import RouteLink from "@/components/ui/RouteLink";
import { useModalStore } from "@/feature/store/useModalStore";
import { NavItem } from "@/types/navigation";

interface Props {
  item: NavItem;
}

export default function NavLink({ item }: Props) {
  const openModal = useModalStore((s) => s.openModal);

  if ("href" in item) {
    return (
      <RouteLink
        href={item.href!}
        className="text-sm uppercase tracking-wide text-stone-200"
      >
        {item.label}
      </RouteLink>
    );
  }

  if ("modal" in item) {
    return (
      <button
        onClick={() => openModal(item.modal!)}
        className="text-sm uppercase tracking-wide bg-orange-700 text-white rounded-md px-6 py-3"
      >
        {item.label}
      </button>
    );
  }

  return null;
}