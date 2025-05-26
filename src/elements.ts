export const generateOption = (value: string, opts?: { text?: string, selected?: boolean }): HTMLOptionElement => {
    const option = document.createElement('option')

    option.value = value
    option.innerText = opts?.text ?? value
    option.selected = opts?.selected ?? false

    return option
}
