export default function PhotoInput(props) {
    return (
        <section>
            <label>
                Flikr Share Link
                <input type="text" name={`photo${props.index}`}
                    value={props.photo.flikrShareLink}
                    onInput={(event) => props.onImageSet(event, props.photo.id)}
                />
            </label>
        </section>
    );
}
