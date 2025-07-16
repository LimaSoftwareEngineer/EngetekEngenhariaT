/**
 * Retorna true se a cor for clara, false se for escura.
 * @param {string} color — cor em formato "#rrggbb", "#rgb" ou "rgb(r, g, b)"
 */
export default function isLight(color) {
  let r, g, b;

  // Se vier em rgb(...)
  if (color.startsWith('rgb')) {
    const nums = color.match(/\d+/g).map(Number);
    [r, g, b] = nums;
  } else {
    // Normaliza formatos #rgb → #rrggbb
    if (color.length === 4) {
      color = '#' + [...color.slice(1)].map(ch => ch + ch).join('');
    }
    // Extrai valores hex
    r = parseInt(color.slice(1, 3), 16);
    g = parseInt(color.slice(3, 5), 16);
    b = parseInt(color.slice(5, 7), 16);
  }

  // Calcula luminância relativa (fórmula ITU‑R BT.709)
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;

  // Threshold: 128 (meio‑tom em 0–255)
  return luminance > 128;
}

// Exemplo de uso com uma div na página:
const box = document.querySelector('.minha-div');
const bg = getComputedStyle(box).backgroundColor;
if (isLight(bg)) {
  console.log('Fundo claro — use texto escuro');
} else {
  console.log('Fundo escuro — use texto claro');
}
