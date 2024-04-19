/**
 * @param {string} flikrShareLink 
 * @returns {{flikrShareLink: string, link: string, width: string, height: string }}
 */
export default function parseFlikrShareLink(flikrShareLink) {
    const parsedPhotoValues = {
        flikrShareLink,
        link: '',
        width: '',
        height: '',
    };

    return parsedPhotoValues;
}
