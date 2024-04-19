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
                    Pieces
                    <input type="text" name="pieces" />
                </label>

                <button type="submit">Submit</button>
            </form>
        </main>
    );
}
