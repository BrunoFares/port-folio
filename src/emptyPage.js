function emptyContent(div) {
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
}

export {emptyContent}