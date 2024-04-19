/* @refresh reload */
import { render } from 'solid-js/web'

import './index.css'
import App from './App'
import { PhotosProvider } from './PhotosProvider'

const root = document.getElementById('root')

render(() => (
    <PhotosProvider>
        <App />
    </PhotosProvider>
), root)
