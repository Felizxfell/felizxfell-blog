import { langs } from "@/types/types.p";

/**
 * Regresa la ruta a la cual se quiere redirecionar para el cambio de idioma
 * @param {string} cadena Ruta actual de la pagina
 * @returns {string}
 */
export const getPathWithoutLang = (cadena: string) => {
  const prefijoEs = `/${langs.es}`;
  const prefijoEn = `/${langs.en}`;

  if (cadena.startsWith(prefijoEs)) {
    return cadena.substring(prefijoEs.length);
  }

  if (cadena.startsWith(prefijoEn)) {
    return cadena.substring(prefijoEn.length);
  }

  return cadena;
};
