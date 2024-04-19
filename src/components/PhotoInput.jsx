import { Show } from "solid-js";

export default function PhotoInput(props) {
    return (
        <section class="photo-controls">
            <h3>Photo {props.index() + 1}:</h3>
            <label>
                 Paste Flikr Share Link
                <input type="text" name={`photo${props.index()}`}
                    value={props.photo.flikrShareLink}
                    onInput={(event) => props.onImageSet(event, props.photo.id)}
                />
            </label>

            <label>
                Alt Txt *
                <input type="text" name={`photo${props.index()}-alt-text`}
                    value={props.photo.altText}
                    onInput={(event) => props.setImageValue(event, props.photo.id, 'altText')}
                />
            </label>

            <table>
                <thead>
                    <tr>
                        <th>Width</th>
                        <th>Height</th>
                        <th class="table-center">Hero Photo?</th>
                        <th class="table-center">Final Build Photo?</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{props.photo.width}</td>
                        <td>{props.photo.height}</td>
                        <td>
                            <input name={`photo${props.index()}-hero`} type="checkbox"
                                value={props.photo.useAsHeroPhoto}
                                onInput={(event) => props.setImageValue(event, props.photo.id, 'useAsHeroPhoto')}
                            />
                        </td>
                        <td>
                            <input name={`photo${props.index()}-final-build`} type="checkbox"
                                value={props.photo.isFinalBuildPhoto}
                                onInput={(event) => props.setImageValue(event, props.photo.id, 'isFinalBuildPhoto')}
                            />
                        </td>
                        <td>
                            <button type="button" onClick={(event) => props.removePhoto(props.photo.id)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>

            <Show when={props.photo.link}>
                <div class="preview">
                    <img src={props.photo.link} />
                </div>
            </Show>
        </section>
    );
}
