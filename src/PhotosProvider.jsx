import { createContext, useContext } from "solid-js";
import { createStore } from "solid-js/store"

const CounterContext = createContext();

export function PhotosProvider(props) {
    const [photos, setPhotos] = createStore([]);
    const store = {
        photos,
        setPhotos,
    };

    return (
        <CounterContext.Provider value={store}>
            {props.children}
        </CounterContext.Provider>
    );
}

export function usePhotosStore() { return useContext(CounterContext); }
