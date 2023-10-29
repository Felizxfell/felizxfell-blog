import { langs } from "@/types/types.p";

export class Helper {
  /**
   * Returns the route to which you want to redirect for the language change
   * @param {string} cadena Current page path
   * @returns {string}
   */
  static getPathWithoutLang = (cadena: string) => {
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

  /**
   * Capitalize a phrase
   * @param text Text to Capitalize
   * @returns Uppercase text
   */
  static Capitalize = (text: string) => {
    const phrases = text.split("-");

    let newText = "";
    phrases.forEach((word) => {
      const firstLetter = word.charAt(0).toUpperCase();

      const remainingLetters = word.substring(1);

      newText += `${firstLetter}${remainingLetters} `;
    });

    return newText.trim();
  };
}
