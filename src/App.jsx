import { For } from "solid-js";
import { themeOptions } from "./utils/theme-options";
import PhotosList from "./components/PhotosList";

export default function App() {
    let formRef;

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(formRef);
        // entries() returns array of [key, value]
        formData.entries().forEach(([label, value]) => {
            console.log('item', label, value);
        });
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
                    Brickset Link
                    <input type="text" name="bricksetLink" />
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
        </main>
    );
}
