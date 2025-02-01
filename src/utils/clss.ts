export function clss(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
