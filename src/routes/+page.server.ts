import type { PageServerLoad } from './$types';
import shiki from 'shiki'

const files = import.meta.glob('$lib/examples/**/*.svelte', { as: 'raw'})

export let prerender = true

export const load = (async () => {
    // Get strings from all the files
    const codeStrings = await Promise.all(Object.values(files).map(fn => fn()))

    // Highlight thew strings by outputting HTML
    const highlighter = await shiki.getHighlighter({ theme: 'material-theme-darker' })
    const shikifiedStrings = await Promise.all(codeStrings.map(file => {
        return highlighter.codeToHtml(file, { lang: 'svelte'})
    }))

    // Extract title and order from path
    const paths = Object.keys(files)
    console.log(paths)
    const pathsAndCode = paths.map((path, i) => ({...extractTitleAndOrder(path), code: shikifiedStrings[i]}))

    console.log(pathsAndCode)

    return {
        cards: pathsAndCode
    };
}) satisfies PageServerLoad;

function extractTitleAndOrder(path: string) {
    const orderAndTitle = path.split('/')[4]
    const [order, ...title_strings] = orderAndTitle.split('-')
    
    return {
        order,
        title: title_strings.join(" ")
    }
}