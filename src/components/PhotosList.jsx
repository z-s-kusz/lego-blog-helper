import { createStore } from "solid-js/store"
import PhotoInput from "./PhotoInput";
import parseFlikrShareLink from "../utils/parseFlikrShareLink";

export default function PhotosList() {
    const [photos, setPhotos] = createStore([]);

    const addPhoto = () => {
        const newPhoto = {
            id: self.crypto.randomUUID(),
            flikrShareLink: '',
            link: '',
            width: '',
            height: '',
            altText: '',
            useAsHeroPhoto: false,
            isFinalBuildPhoto: false,
        };
        setPhotos([ ...photos, newPhoto]);
    };

    const onImageSet = (event, id) => {
        const flikrShareLink = event.target.value;
        const parsedPhotoValues = parseFlikrShareLink(flikrShareLink);
        // https://docs.solidjs.com/concepts/stores#modifying-values-in-arrays
        setPhotos(
            (photo) => photo.id === id,
            (photo) => {
                return {
                    ...photo,
                    ...parsedPhotoValues,
                };
            },
        );
        console.log(photos)
    };

    // TODO handle removing photos, toggling checkboxes, setting alt text
    return (
        <fieldset>
            <legend>Manage Photos</legend>

            <button type="button" onClick={addPhoto}>Add Photo</button>

            <For each={photos}>{(photo) => <PhotoInput photo={photo} onImageSet={onImageSet} />}</For>
        </fieldset>
    );
}
