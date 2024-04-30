import { For } from 'solid-js';

export default function QuickLinks() {
    const links = [
        'https://www.flickr.com',
        'https://photos.google.com',
        'https://brickset.com',
        'https://www.brickeconomy.com',
    ];

    return (
        <ul>
            <For each={links}>
                {(link) => {
                    return <li><a href={link} target="_blank">{link}</a></li>;
                }}
            </For>
        </ul>
    );
}
