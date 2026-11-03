import React, { useEffect, useRef, useState } from "react";

export interface ActionMenuItem {
  label: string;
  href: string;
  download?: string;
}

interface ActionMenuProps {
  icon: React.ReactNode;
  label: string;
  items: ActionMenuItem[];
  className?: string;
}

export function ActionMenu({ icon, label, items, className }: ActionMenuProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [open]);

  return (
    <div ref={containerRef} className="relative inline-block">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={`inline-flex items-center gap-2 whitespace-nowrap font-body text-sm tracking-[0.15em] uppercase text-sage-dark/70 hover:text-sage-dark transition-colors border-b border-sage-dark/30 hover:border-sage-dark pb-1 focus:outline-none ${className ?? ""}`}
      >
        {icon}
        {label}
      </button>
      {open && (
        <div
          role="menu"
          className="absolute left-1/2 -translate-x-1/2 mt-1 z-50 min-w-[9rem] overflow-hidden rounded-md border border-sage-dark/20 bg-ivory p-1 text-popover-foreground shadow-md"
        >
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              download={item.download}
              onClick={() => setOpen(false)}
              className="relative flex select-none items-center rounded-sm px-2.5 py-1.5 font-body text-sm tracking-wide text-sage-dark cursor-pointer hover:bg-accent/10 transition-colors whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

