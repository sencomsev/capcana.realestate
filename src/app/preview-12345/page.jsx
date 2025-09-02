// Рисуем домашнюю прямо здесь, без redirect
import Home_V10 from "../(home)/home-v10/page";

export const dynamic = "force-static"; // можно убрать, просто на всякий

export default function Preview() {
  return <Home_V10 />;
}
