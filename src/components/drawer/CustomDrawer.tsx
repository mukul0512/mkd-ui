"use client";

import { ReactNode } from "react";
import "./drawerStyles.css";

interface Props {
  open: boolean;
  heading: string;
  onSave: () => void;
  children: ReactNode;
  saveBtnTxt?: string;
  onCancel: () => void;
  cancelBtnTxt?: string;
}

const CustomDrawer = ({
  open,
  onSave,
  heading,
  onCancel,
  children,
  saveBtnTxt = "Save",
  cancelBtnTxt = "Cancel",
}: Props) => {
  if (!open) return null; /* Don't render when closed */


  return (
    <div className="mkd-drawer-root" role="presentation">
      {/* Backdrop overlay – click to close */}
      <div
        className="mkd-drawer-backdrop"
        onClick={onCancel}
        aria-hidden="true"
      />
      {/* Drawer panel – slides from right */}
      <div
        className="mkd-drawer-panel"
        onClick={(e: React.MouseEvent) => e.stopPropagation()}
      >
        {/* Header – title */}
        <div className="mkd-drawer-header">
          <p className="mkd-drawer-header-title">{heading}</p>
        </div>
        {/* Content – scrollable body */}
        <div className="mkd-drawer-content">{children}</div>
        {/* Footer – action buttons */}
        <div className="mkd-drawer-footer">
          <button
            type="button"
            className="mkd-drawer-btn mkd-drawer-btn-cancel"
            onClick={onCancel}
          >
            {cancelBtnTxt}
          </button>
          <button
            type="button"
            className="mkd-drawer-btn mkd-drawer-btn-save"
            onClick={onSave}
          >
            {saveBtnTxt}
          </button>
        </div>
      </div>
    </div>
  );
};

export { CustomDrawer };
