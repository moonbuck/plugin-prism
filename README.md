# plugin-prismjs

A plugin for [Micro.blog](https://micro.blog "Micro.blog") that injects [Prism](https://prismjs.com/ "Prism") Javascript and CSS stylesheets to enable syntax highlighting for a sh$t ton of grammars within inline `<code>` tags and `<pre><code>` combination code blocks. Its code lives [here](https://github.com/moonbuck/plugin-prismjs "plugin-prismjs").

Prism looks for `<code class="language-xxx">` tags for inline syntax highlighting and for `<pre><code class="language-xxx">` tags for syntax highlighting blocks of code.

For example, the opening tags for the following would be `<pre><code class="language-pug">`:

![Simple Example](https://raw.githubusercontent.com/moonbuck/plugin-prismjs/main/no_line_numbers.jpeg)

## Plugin Structure

The core Javascript file lives at `/static/assets/js/prism-core.js`. The stylesheets for the various themes live at `/static/assets/css/themes/`. The [language grammars](https://prismjs.com/#supported-languages "Supported Languages") live at `/static/assets/js/components/` .  The scripts for included [plugins](https://prismjs.com/#plugins "Plugins") live at `/static/assets/js/plugins/`.

The stylesheet living at `static/assets/css/prism.css` addresses a line-number spacing issue I ran into.

The partial injecting the Javascript and CSS lives at `/layouts/partials/prismjs-injection.html`. The partial that actually constructs code blocks lives at `/layouts/partials/highlight.html`.

There are two shortcodes living at `/layouts/shortcodes/`. The `highlight` shortcode expects a labeled, code fenced block such as:

![Code Fence](https://raw.githubusercontent.com/moonbuck/plugin-prismjs/main/code_fence.jpeg)

The `language` shortcode expects a generic code block (such as [Ulysses](https://ulysses.app "Ulysses") might generate) with the grammar passed as a positional parameter, kinda like:

 ![Language Example](https://raw.githubusercontent.com/moonbuck/plugin-prismjs/main/language_example.jpeg)
 
or with named parameters mirroring those taken by `highlight` with the addition of the mandatory `language` parameter.

Let’s go through the plugins I’ve chosen to include.

## Plugins

**[Autoloader](https://prismjs.com/plugins/autoloader/ "Autoloader")**: This plugin dynamically loads required grammars from `/static/assets/js/components/`.

**[Unescaped Markup](https://prismjs.com/plugins/unescaped-markup/ "Unescaped Markup")**: This plugin enables the use of a `<script>` tag in place of `<pre><code>` for blocks of code. This is utilized by `/layouts/partials/highlight.html`.

**[Line Numbers](https://prismjs.com/plugins/line-numbers/ "Line Numbers")**: This plugin enables the display of a gutter full of line numbers for blocks of code.

![Line Numbers Example](https://raw.githubusercontent.com/moonbuck/plugin-prismjs/main/line_numbers_normalized_whitespace.jpeg)

I have noticed that the line number appearance can be kinda spotty as far as alignment. The problem seems to lie somewhere in the CSS. The HTML DOM contains the correct number of generated `<span>` tags to represent the lines.

**[Highlight Keywords](https://prismjs.com/plugins/highlight-keywords/ "Highlight Keywords")**: This plugin appends class names with more specificity for keyword tokens.

**[Keep Markup](https://prismjs.com/plugins/keep-markup/ "Keep Markup")**: This plugin allows for the preservation of `<mark>` tags within the highlighted code.

![Code for Keep Markup Example](https://raw.githubusercontent.com/moonbuck/plugin-prismjs/main/code_for_keep_markup.jpeg)

![Keep Markup Example](https://raw.githubusercontent.com/moonbuck/plugin-prismjs/main/keep_markup.jpeg)

**[Normalize Whitespace](https://prismjs.com/plugins/normalize-whitespace/ "Normalize Whitespace")**: This plugin helps wrangle whitespace for blocks of code.

<figure>
![Without Normalization](https://raw.githubusercontent.com/moonbuck/plugin-prismjs/main/line_numbers_preserved_whitespace.jpeg)
<figcaption>With Whitespace Preserved</figcaption>
</figure>

<figure>
![Without Normalization](https://raw.githubusercontent.com/moonbuck/plugin-prismjs/main/line_numbers_normalized_whitespace.jpeg)
<figcaption>With Whitespace Normalized</figcaption>
</figure>

**[Toolbar](https://prismjs.com/plugins/toolbar/ "Toolbar")**: This plugin attaches a toolbar to be utilized by other plugins. The plugins that follow depend upon it.

**[Show Language](https://prismjs.com/plugins/show-language/ "Show Language")**: This plugin sticks an item in the toolbar with the name of the grammar being highlighted.

![Show Language](https://raw.githubusercontent.com/moonbuck/plugin-prismjs/main/show_language.jpeg)

**[Copy to Clipboard Button](https://prismjs.com/plugins/copy-to-clipboard/ "Copy to Clipboard Button")**: This plugin sticks a button in the toolbar for copying the highlighted text onto the clipboard.

![Copy to Clipboard Button](https://raw.githubusercontent.com/moonbuck/plugin-prismjs/main/copy_to_clipboard_button.jpeg)

That’s a wrap on the Prism plugins. Let’s check out the plugin parameters, shall we?

## Parameters

![](https://raw.githubusercontent.com/moonbuck/plugin-prismjs/main/plugin_parameters.jpeg)

Alrighty, first up is the `PrismJS Theme`. I rolled my own `darcula`-esque them and named it `moondeer`. This is the theme I’ve been using in the screenshots and what you get by default. I included the stylesheets for all the themes that were available on the download page as well. If you want to play around with the themes, these would be the supported parameter values: `moondeer`, `default`, `dark`, `coy`, `funky`, `okaidia`, `solarized-light`, `twilight`, `tomorrow-night`.

The `Font Size` parameter gets inserted into the partial injected into the page `<head>`. Rather than maintain a bunch of stylesheets (and in order to parameterize it), I chose to set the size here and slap on `!important`.

The `Minify` parameter determines whether linked scripts and stylesheets will be the developer or minified versions.

The `Line Numbers` parameter controls whether code blocks come with or without line numbers by default when using the shortcodes without passing a `line-numbers` parameter.

The `Enable Toolbar` parameter controls whether the toolbar plugin gets loaded.

The `Soft Wrap` parameter controls whether code blocks should wrap long lines.

<figure>
![Without Soft Wrap](https://raw.githubusercontent.com/moonbuck/plugin-prismjs/main/no_wrap.jpeg)
<figcaption>Without Soft Wrap</figcaption>
</figure>

<figure>
![Without Soft Wrap](https://raw.githubusercontent.com/moonbuck/plugin-prismjs/main/soft_wrap.jpeg)
<figcaption>With Soft Wrap</figcaption>
</figure>

The `Show Language` parameter controls whether the plugin for the language toolbar item gets loaded.

The `Copy Button` parameter controls whether the plugin for the copy-to-clipboard-button toolbar item gets loaded.

The `Preserve Whitespace` parameter controls whether whitespace normalization is turned off by default when using the shortcodes.

The `Whitespace Settings` parameter enables customization over the [whitespace normalization plugin](https://prismjs.com/plugins/normalize-whitespace/ "Normalize Whitespace"). If used, the value should be a JSON object (that gets persisted as a string).

The `Keep Markup` parameter controls whether those `<mark>` tags are preserved by default. This currently serves no purpose as the shortcodes mangled the tags when I tried running some through. Hardcoding the tags rather than using a shortcode (as shown up top) does work properly.

## Shortcode Parameters

### `highlight`
#### All parameters are optional

`line-numbers`: `"true"` to generate line numbers

`preserve-whitespace`: `"true"` to turn off whitespace normalization

`keep_markup`: `"true"` to preserve `<mark>` tags (**broken**)

`data-language`:  Used to display a specific label whether it has been defined as a language or not

<figure>
![Without Data Language](https://raw.githubusercontent.com/moonbuck/plugin-prismjs/main/without_data_language.jpeg)
<figcaption>Without Setting data-language</figcaption>
</figure>

<figure>
![With Data Language](https://raw.githubusercontent.com/moonbuck/plugin-prismjs/main/with_data_language.jpeg)
<figcaption>Withdata-language Set to "Hugo"</figcaption>
</figure>

`dependencies`: A list of comma-separated language aliases for additional grammars to load

<figure>
![Without Dependency](https://raw.githubusercontent.com/moonbuck/plugin-prismjs/main/without_dependency.jpeg)
<figcaption>Pug Without Less Dependency</figcaption>
</figure>

<figure>
![With Dependency](https://raw.githubusercontent.com/moonbuck/plugin-prismjs/main/with_dependency.jpeg)
<figcaption>Pug With Less Dependency</figcaption>
</figure>

## Bugs
It’s worth noting that I believe I have found a mobile Safari bug that affects the font-size of the highlighted text on an iPhone when in portrait. Your mileage may vary; but, [this](https://moondeer.blog/2021/10/30/okay-fk-it.html "iPhone Portrait Bug") was my experience.