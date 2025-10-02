// firebase-loader.js
export async function loadFirebase() {
  const response = await fetch("domain.html");
  const text = await response.text();
  const parser = new DOMParser();
  const doc = parser.parseFromString(text, "text/html");
  const configEl = doc.querySelector("#firebase-config");
  return JSON.parse(configEl.textContent);
}