const textWrites = new WeakMap<Text, string>()

export const updateTextContent = function (text: Text, content: string): void {
    if (text.data === content) return

    textWrites.set(text, content)
    text.data = content
}

export const isOwnTextMutation = function (mutation: MutationRecord): boolean {
    if (mutation.type !== 'characterData' || !(mutation.target instanceof Text)) return false

    const expectedContent = textWrites.get(mutation.target)
    if (expectedContent === undefined) return false
    if (expectedContent !== mutation.target.data) {
        textWrites.delete(mutation.target)
        return false
    }

    return true
}
