export function containsRerum(text) {
  return /\brerum\b/i.test(text);
}

export function highlightText(text) {
  return text.replace(/(rerum)/gi, "<mark>$1</mark>");
}
