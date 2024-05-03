/**
 * @param {string} text 
 * @returns {string}
 * @description 'Example Text' turns into 'example-text'
 */
export default function kebabCase(text) {
    if (!text) return '';

    text = text.toLowerCase();
    const words = text.split(/\s+/);
    let kebabedText = '';

    words.forEach((word, i) => {
        kebabedText += word;
        if (i < words.length - 1) kebabedText += '-';
    });

    return kebabedText;
}
