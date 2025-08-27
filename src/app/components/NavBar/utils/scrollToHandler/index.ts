export function scrollToHandler(id: string) {
  const target = document.querySelector(`#${id ?? ""}`);

  if (!target) return null;
  target.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}
