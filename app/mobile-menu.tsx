'use client';

import { useRef } from 'react';

type MobileMenuItem = {
  label: string;
  href: string;
};

export default function MobileMenu({ items }: { items: MobileMenuItem[] }) {
  const menuRef = useRef<HTMLDetailsElement>(null);

  const closeMenu = () => {
    menuRef.current?.removeAttribute('open');
  };

  return (
    <details className="mobile-menu" ref={menuRef}>
      <summary aria-label="打开章节目录">
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </summary>
      <nav aria-label="移动端章节导航">
        {items.map((item) => (
          <a key={item.label} href={item.href} onClick={closeMenu}>{item.label}</a>
        ))}
      </nav>
    </details>
  );
}
