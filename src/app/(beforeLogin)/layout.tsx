import { ReactNode } from "react";
import styles from "@/app/(beforeLogin)/_component/main.module.css";

type Props = { children: ReactNode; modal: ReactNode };

export default function Layout({ children, modal }: Props) {
  return (
    <div className={styles.container}>
      {children}
      {modal}
    </div>
  );
}

// 주소가 "/"일 때는 children->page.tsx, modal->@modal/default.tsx
// 주소가 "/i/flow/login"일 때는 children->/i/flow/login/page.tsx, modal->@modal/page.tsx
