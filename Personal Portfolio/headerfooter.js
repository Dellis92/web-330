class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav id="nav">
            <a href="index.html">Home</a>
            <a href="about.html">About</a>
            <a href="resume.html">Resume</a>
            <a href="projects.html">Projects</a>
            <a href="bucketlist.html">Bucket List</a>
            <a href="database.html">Database Diagrams</a>
            <a href="api.html">API Unit Tests</a>
        </nav>
        `
    }
}

customElements.define('my-header', MyHeader)


class MyFooter extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
        <footer>
            @ 2023 DeVonte' Ellis
        </footer>
        `
    }
}

customElements.define('my-footer', MyFooter)