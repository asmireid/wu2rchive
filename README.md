# Wu2rchive

此网站使用 [Docusaurus](https://docusaurus.io/zh-CN/) 构建。

## 编辑前建议阅读

-   如需新增页面，请将 Markdown 文件添加到 `docs/` 文件夹中。

    -   侧边栏结构会根据文件夹结构自动更新。
    -   请在子文件夹名前加上类似 `03-` 的编号，以确保排序正确。
    -   每个子文件夹会被视为一个独立的章节。
    -   子文件夹内的 `index.md` 将作为该章节的默认页面。
    -   Markdown 文件也可以数字编号，例如 `0003-`，编号过的文件会按编号顺序出现在侧边栏，优先显示在其他未编号文件前。
    -   **请勿随意更改他人已设立好的编号，会导致很多文件引用爆炸！！！**

-   页面可以使用 [Markdown front matter](https://docusaurus.io/zh-CN/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter) 来自定义一些相关信息，例如“标签”。

    -   front matter 需要在文档最顶部，包裹在上下三个破折号内。
    -   使用例：

        ```
        ---
        hide_table_of_contents: true
        tags: [Class of 2025, 神人]
        ---

        （文档实际内容）
        ```

    -   注意：**tags 内容需要用英文逗号隔开，不然会被当成一个词！！！**

-   如需在页面中引用其他页面，请用相对路径指向其他页面的文件包含`.md`后缀的文件名。

    -   使用例(同个文件夹下)：`[玩乐奈](0018-玩乐奈.md)`
    -   使用例（另一个文件夹中）：`[高松灯之夜](../02-术语词典/高松灯之夜.md)`

-   如需在页面中引用图片，请将其放入`static/img/` 文件夹里，据官网说这样有助于优化，也方便统一管理。

    -   请将图片放入合适的子文件夹内，如果现有的所有子文件夹都不适合这张图片，请创建一个**全小写英文**命名的新子文件夹（子文件夹名一般描述分类，如`screenshot/`）。即便你只打算放一张图片也请这么做，未来的编辑者可能会用到。

-   在 Markdown 中引用 `static/` 文件夹里的内容时，只需使用绝对路径，例如 `/example-folder/example-image.png`(**注意：不包含`static/`前缀，不然会无法识别！！！**)，不需要使用相对路径。详见：[官方文档说明](https://docusaurus.io/zh-CN/docs/markdown-features/assets#static-assets)。

    -   使用例：`![BTR](/img/anime/BTR.png)`

-   `docusaurus.config.js` 文件用于自定义整个 Wiki，例如页脚、站点信息等设置。不建议修改。

## 文档支持 React 组件

受益于 Docusaurus，编辑者可以在 Markdown 文档里直接混用组件

使用方法：

-   在文档顶部（但是 front matter 下面）引用相关组件：`import ComponentName from '@site/src/components/ComponentName';`
-   在文档中正常使用组件：`<ComponentName>children</ComponentName>`

若希望自定义新的组件，请在 `src/components/` 文件夹内加入新的组件文件夹（**首字母大写英文**命名），使用 `index.js` 编写组件内容， `styles.module.css` 编写组件 css；可参考现有组件写法。强烈建议仅限对 [React 组件](https://zh-hans.react.dev/learn/your-first-component)有了解者编写。

Docusaurus 自带的组件：

### Admonition

此组件用于插入醒目[告示](https://docusaurus.io/zh-CN/docs/markdown-features/admonitions#usage-in-jsx)。

使用例：

```
import Admonition from '@theme/Admonition';

<Admonition
    type="告示类型（支持的类型请参考上面官方文档）"
    icon="告示图标，支持emoji（可以不写）"
    title="告示标题（可以不写）"
>
    告示内容（支持 Markdown 语法）
</Admonition>
```

站主写的几个组件：

### MemberCard

此组件用于插入圆形头像+链接+姓名+描述的人物卡。

使用例：

```
import MemberCard from '@site/src/components/MemberCard';

<MemberCard
    name="想填入的名字"
    subtitle="想加入的副标题描述（可以不写）"
    avatar="头像图片的链接（建议为方形）"
    link="希望点击头像后跳转到的链接（可以不写）"
/>
```

### Signature

此组件用于插入右对齐的斜体文字，可以用作签名。（会成为单独一段）

使用例：

```
import Signature from '@site/src/components/Signature';

<Signature>内部文字（支持 Markdown 语法）</Signature>
```

### Spoiler

此组件用于插入鼠标悬浮后显示文字的黑条。（可以用在文字之中，不会成为单独一段）

使用例：

```
import Spoiler from '@site/src/components/Spoiler';

其他前文<Spoiler>内部文字（支持 Markdown 语法）</Spoiler>其他后文
```
