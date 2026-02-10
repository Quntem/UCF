import sanitizeHtml from "sanitize-html";
import * as marked from 'marked';

export const Blocks = {
    "basic.text.title": {
        edit: {
            render: (block: { content: string }) => <BasicTextTitleBlock block={block} />
        },
        view: {
            render: (block: { content: string }) => <BasicTextTitleBlock block={block} />
        }
    },
    "basic.text.plain": {
        edit: {
            render: (block: { content: string }) => <BasicTextPlainBlock block={block} />
        },
        view: {
            render: (block: { content: string }) => <BasicTextPlainBlock block={block} />
        }
    },
    "basic.text.html": {
        edit: {
            render: (block: { content: string }) => <BasicTextHtmlBlock block={block} />
        },
        view: {
            render: (block: { content: string }) => <BasicTextHtmlBlock block={block} />
        }
    },
    "basic.text.markdown": {
        edit: {
            render: (block: { content: string }) => <BasicTextMarkdownBlock block={block} />
        },
        view: {
            render: (block: { content: string }) => <BasicTextMarkdownBlock block={block} />
        }
    },
}

function BasicTextTitleBlock({ block }: { block: { content: string } }) {
    return <h1 className="text-2xl">{block.content}</h1>
}

function BasicTextPlainBlock({ block }: { block: { content: string } }) {
    return <p>{block.content}</p>
}

function BasicTextMarkdownBlock({ block }: { block: { content: string } }) {
    return <p dangerouslySetInnerHTML={{ __html: sanitizeHtml(marked.parse(block.content)) }} />
}

function BasicTextHtmlBlock({ block }: { block: { content: string } }) {
    return <div dangerouslySetInnerHTML={{ __html: sanitizeHtml(block.content) }} />
}