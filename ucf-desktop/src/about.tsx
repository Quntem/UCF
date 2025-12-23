export default function AboutPage() {
    return (
        <div className="flex-1 p-4 gap-3 flex flex-col">
            <img src="/logo.svg" className="w-12 h-12" alt="OpenUCF Desktop" />
            <h1 className="text-2xl">OpenUCF Desktop</h1>
            <p className="text-sm text-neutral-400">Version 0.0.1</p>
            <p className="text-sm text-neutral-500">OpenUCF Desktop is a free and open source desktop application for editing and viewing UCF files.</p>
        </div>
    )
}