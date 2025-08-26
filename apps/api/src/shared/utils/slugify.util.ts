// utils/slugify.ts
export function slugify(input: string): string {
  return input
    .normalize('NFD') // remove acentos
    .replace(/[\u0300-\u036f]/g, '') // remove diacríticos (ex: ã -> a)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '') // remove caracteres especiais
    .replace(/\s+/g, '-') // troca espaços por "-"
    .replace(/-+/g, '-'); // evita múltiplos "-"
}
