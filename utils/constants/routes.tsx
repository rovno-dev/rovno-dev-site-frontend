export const ROUTES: Record<string, {
  href: string,
  defaultTitle?: string,
}> = {
  home: { href: "/", defaultTitle: "Главная" },
  cases: { href: "/cases", defaultTitle: "Кейсы" },
  about: { href: "/about", defaultTitle: "Агентство" },
  career: { href: "/rabota", defaultTitle: "Вакансии" },
  vershiny: { href: "/vershiny", defaultTitle: "Вершины" },
  journal: { href: "/jr", defaultTitle: "Журнал ровня" },
}