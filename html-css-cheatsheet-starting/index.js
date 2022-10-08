import { examples } from "./examples.js"

function creatHTMLExample() {
    const INSERT_ID = 'htmlExample'
    const preTag = document.getElementById(INSERT_ID)
    preTag.append(examples.html)
}
creatHTMLExample()