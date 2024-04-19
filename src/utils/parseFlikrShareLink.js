/**
 * @param {string} flikrShareLink 
 * @returns {{flikrShareLink: string, link: string, width: string, height: string }}
 */
export default function parseFlikrShareLink(flikrShareLink = '') {
    const parsedPhotoValues = {
        flikrShareLink,
        link: '',
        width: '',
        height: '',
    };

    if (flikrShareLink) {
        const linkRegex = /src="([^">]+)"/;
        const widthRegex = /width="([^">]+)"/;
        const heightRegex = /height="([^">]+)"/;
        const linkGroup = linkRegex.exec(flikrShareLink);
        const widthGroup = widthRegex.exec(flikrShareLink);
        const heightGroup = heightRegex.exec(flikrShareLink);

        if (linkGroup?.length) parsedPhotoValues.link = linkGroup[1];
        if (widthGroup?.length) parsedPhotoValues.width = widthGroup[1];
        if (heightGroup?.length) parsedPhotoValues.height = heightGroup[1];
    }

    return parsedPhotoValues;
}
