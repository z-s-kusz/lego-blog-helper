import { For, createSignal } from "solid-js";
import { themeOptions } from "./utils/theme-options";
import PhotosList from "./components/PhotosList";
import { usePhotosStore } from "./PhotosProvider";
import createFile from "./utils/createFile";

export default function App() {
    const { photos } = usePhotosStore();
    const [preview, setPreview] = createSignal('');
    const [fileName, setFileName] = createSignal('');
    const [fileURL, setFileURL] = createSignal(null);
    let formRef;

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(formRef);

        const file = createFile(formData, photos);
        const url = URL.createObjectURL(file);
        const previewText = await file.text();
        setFileURL(url);
        setPreview(previewText);
        setFileName(formData.get('name') + '.md');
    };

    return (
        <main>
            <h1>New Deconstructed Set</h1>
            <form onSubmit={handleSubmit} ref={formRef}>
                <label>
                    Set Name
                    <input type="text" name="name" />
                </label>

                <label>
                    Subtitle
                    <input type="text" name="subtitle" />
                </label>

                <label>
                    Lego ID
                    <input type="text" name="legoId" />
                </label>

                <label>
                    Theme
                    <input type="text" name="legoTheme" />
                </label>

                <label>
                    Subtheme
                    <input type="text" name="legoSubtheme" />
                </label>

                <label>
                    Set's Release Date
                    <input type="date" name="dateReleased" />
                </label>

                <label>
                    Publish Date
                    <input type="date" name="publishDate" />
                </label>

                <label>
                    Pieces
                    <input type="text" name="pieces" />
                </label>

                <label>
                    Theme
                    <select name="theme1">
                        <For each={themeOptions}>
                            {(theme) => <option value={theme}>{theme}</option>}
                        </For>
                    </select>
                </label>

                <label>
                    Brickset Link
                    <input type="text" name="bricksetLink" />
                </label>

                <PhotosList />

                <button type="submit">Submit</button>
            </form>

            <Show when={preview() && fileURL()}>
                <section>
                    <h1>Preview:</h1>

                    <pre>
                        <code>{preview()}</code>
                    </pre>

                    <a href={fileURL()} download={fileName()}>Download as Markdown File</a>
                </section>
            </Show>
        </main>
    );
}
