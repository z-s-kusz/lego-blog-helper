// date as MM-DD-YYYY and in strings
const formatDate = (date) => {
    if (!date) date = new Date();

    const dateObj = new Date(date);
    const year = dateObj.getFullYear();
    let month = (1 + dateObj.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;
    let day = dateObj.getDate().toString();
    day = day.length > 1 ? day : '0' + day;

    return `'${month}-${day}-${year}'`;
};

const getHeroIndex = (photos) => {
    let heroPhotoIndex = photos.findIndex((photo) => photo.useAsHeroPhoto);
    const builtImageIndex = photos.findIndex((photo) => photo.isFinalBuildPhoto);

    if (builtImageIndex < heroPhotoIndex) heroPhotoIndex--;
    return heroPhotoIndex;
};

/**
 * @param {Object} FormData
 * @param {Array} photos
 * @returns {Blob}
 */
export default function createFile(formData, photos) {
    const blobParts = [];
    // Bob Law's Law Blog's Blob Options ( a.k.a. Blobtions)
    const blobOptions = {
        type: 'text/markdown',
    }; 

    blobParts.push('---\n');

    formData.entries().forEach(([label, value]) => {
        if (label === 'publishDate') {
            blobParts.push(`dates:\n`);
            blobParts.push(`  - ${formatDate(value)}\n`);
        } else if (label.toLowerCase().includes('date')) {
            blobParts.push(`${label}: ${formatDate(value)}\n`);
        } else if (!label.includes('photo')) {
            blobParts.push(`${label}: ${value}\n`);
        }
    });

    const heroPhotoIndex = getHeroIndex(photos);
    const builtImage = photos.find((photo) => photo.isFinalBuildPhoto);
    blobParts.push(`heroPhotoIndex: ${heroPhotoIndex}\n`);
    blobParts.push(`builtImage: ${builtImage?.link || ''}\n`);

    blobParts.push('photos:\n');

    let photosAdded = false; 
    photos.forEach((photo) => {
        if (photo.isFinalBuildPhoto) return;
    
        // track when 1st gets added by var since the 1st index may be skipped if isFinalBuildPhoto
        if (photosAdded) {
            blobParts.push('\n');
        }
        blobParts.push(`  - link: ${photo.link}\n`);
        blobParts.push(`    width: ${photo.width}\n`);
        blobParts.push(`    height: ${photo.height}\n`);
        blobParts.push(`    altText: ${photo.altText}\n`);

        photosAdded = true;
    });

    blobParts.push('---\n');
    blobParts.push('\n');
    blobParts.push("<!-- Bob Law's Law Blog Content Goes Here! -->\n");

    return new Blob(blobParts, blobOptions);
}
