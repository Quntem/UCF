export const Blocks = {
    "basic.text.title": {
        edit: {
            render: (block: { content: string }) => <BasicTextTitleBlock content={block.content} />
        },
        view: {
            render: (block: { content: string }) => <BasicTextTitleBlock content={block.content} />
        }
    },
    "basic.text.plain": {
        edit: {
            render: (block: { content: string }) => <BasicTextPlainBlock content={block.content} />
        },
        view: {
            render: (block: { content: string }) => <BasicTextPlainBlock content={block.content} />
        }
    },
}

function BasicTextTitleBlock({ content }: { content: string }) {
    return <h1 className="text-2xl">{content}</h1>
}

function BasicTextPlainBlock({ content }: { content: string }) {
    return <p>{content}</p>
}