import * as fs from 'node:fs/promises';
import * as marked from 'marked';
import sanitizeHtml from 'sanitize-html';

async function loadUCF(fileName: string) {
    const file = await fs.readFile(fileName, "utf-8");
    return JSON.parse(file);
}

const blocks = {
    "basic.text.title": (content: string) => `<h1>${content}</h1>`,
    "basic.text.plain": (content: string) => `<p>${content}</p>`,
    "basic.text.markdown": (content: string) => `<p>${sanitizeHtml(marked.parse(content))}</p>`,
    "basic.text.html": (content: string) => `<p>${sanitizeHtml(content)}</p>`,
}

const ucf = await loadUCF("example.ucf");

const html = `
<html>
    <head>
        <title>${ucf.docinfo.title}</title>
        <meta property="og:title" content="${ucf.docinfo.title}" />
        <meta property="og:description" content="${ucf.docinfo.description}" />
    </head>
    <body>
        <div>This document was generated from a UCF file.</div>
        <div>File Info:</div>
        <ul>
            <li>Date Created: ${ucf.docinfo.created.date}</li>
            <li>Date Modified: ${ucf.docinfo.modified.date}</li>
            <li>UCF Version: ${ucf.ucfinfo.version}</li>
            <li>Document Description: ${ucf.docinfo.description}</li>
            <li>Document Title: ${ucf.docinfo.title}</li>
        </ul>
        <div>Document Authors:</div>
        <ul>${Object.entries(ucf.authors).map(([index, author]) => `
<li>${author.name}</li>
`).join("\n")}</ul>
        <hr>
        ${ucf.content.blocks.map((block) => blocks[block.type](block.content)).join("\n")}
    </body>
</html>
`

fs.writeFile("example.html", html);