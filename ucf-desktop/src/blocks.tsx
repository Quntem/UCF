import sanitizeHtml from "sanitize-html";
import * as marked from 'marked';
import { useState } from "react";

export const Blocks = {
    "basic.text.title": {
        edit: {
            render: (block: { content: string }) => <BasicTextTitleBlockEdit block={block} />
        },
        view: {
            render: (block: { content: string }) => <BasicTextTitleBlock block={block} />
        }
    },
    "basic.text.plain": {
        edit: {
            render: (block: { content: string }) => <BasicTextPlainBlockEdit block={block} />
        },
        view: {
            render: (block: { content: string }) => <BasicTextPlainBlock block={block} />
        }
    },
    "basic.text.html": {
        edit: {
            render: (block: { content: string }) => <BasicTextHtmlBlockEdit block={block} />
        },
        view: {
            render: (block: { content: string }) => <BasicTextHtmlBlock block={block} />
        }
    },
    "basic.text.markdown": {
        edit: {
            render: (block: { content: string }) => <BasicTextMarkdownBlockEdit block={block} />
        },
        view: {
            render: (block: { content: string }) => <BasicTextMarkdownBlock block={block} />
        }
    },
}

function BasicTextTitleBlockEdit({ block }: { block: { content: string } }) {
    const [value, setValue] = useState(block.content)
    // return <input className="text-2xl h1 textbox-w-auto mb-2 rounded-md px-5 py-2 border-1" value={value} onChange={(e) => {
    //     setValue(e.target.value)
    // }} />
    return <input className="text-2xl h1 w-full border-b-5 border-neutral-300" value={value} onChange={(e) => {
        setValue(e.target.value)
    }} />
}

function BasicTextTitleBlock({ block }: { block: { content: string } }) {
    return <h1 className="text-2xl">{block.content}</h1>
}


function BasicTextPlainBlock({ block }: { block: { content: string } }) {
    return <p>{block.content}</p>
}

function BasicTextPlainBlockEdit({ block }: { block: { content: string } }) {
    return <p className="border-b-5 border-neutral-300">{block.content}</p>
}

function BasicTextMarkdownBlock({ block }: { block: { content: string } }) {
    return <p dangerouslySetInnerHTML={{ __html: sanitizeHtml(marked.parse(block.content)) }} />
}

function BasicTextMarkdownBlockEdit({ block }: { block: { content: string } }) {
    return <p className="border-b-5 border-neutral-300" dangerouslySetInnerHTML={{ __html: sanitizeHtml(marked.parse(block.content)) }} />
}

function BasicTextHtmlBlock({ block }: { block: { content: string } }) {
    return <div dangerouslySetInnerHTML={{ __html: sanitizeHtml(block.content) }} />
}

function BasicTextHtmlBlockEdit({ block }: { block: { content: string } }) {
    return <div className="border-b-5 border-neutral-300" dangerouslySetInnerHTML={{ __html: sanitizeHtml(block.content) }} />
}