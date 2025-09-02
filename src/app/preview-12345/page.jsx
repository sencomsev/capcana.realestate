import { redirect } from "next/navigation";

export default function Preview() {
  // отправляем прямо на реальный роут демо-домашки
  redirect("/home-v10");
}
