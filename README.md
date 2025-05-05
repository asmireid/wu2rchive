# Wu2rchive

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Tips for Updating Contents

-   Add new files to `docs/` folder to add pages to our wiki.
    -   The sidebar structure gets automatically updated based our folder structure.
    -   Make sure to have numbers like `03-` before the subfolder to ensure correct ordering.
    -   Each subfolder is its own section.
    -   The `index.md` of a subfolder serves as the default page for that section.
-   Inside the Markdown, when linking to contents in the `static/` folder, simply using `/example-folder/example-image.png` is enough. There's no need to specify a relative path. Details [here](https://docusaurus.io/docs/markdown-features/assets#static-assets).
-   `docusaurus.config.js` customizes our wiki, such as the footer.
