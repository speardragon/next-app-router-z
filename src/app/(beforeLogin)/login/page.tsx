// import { redirect } from "next/navigation";
"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "@/app/page.module.css";
import Link from "next/link";
import zLogo from "../../../../public/zlogo.png";
import Main from "../_component/Main";

// export default function Login() {
//   redirect("/i/flow/login");
// }

export default function Login() {
  const router = useRouter();
  router.replace("/i/flow/login");
  return <Main />;
}
