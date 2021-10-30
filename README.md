# plugin-prismjs

A plugin for [Micro.blog](https://micro.blog "Micro.blog") that injects [Prism](https://prismjs.com/ "Prism") Javascript and CSS stylesheets to enable syntax highlighting for a sh$t ton of grammars within inline `<code>` tags and `<pre><code>` combination code blocks.

Prism looks for `<code class="language-xxx">` tags for inline syntax highlighting and for `<pre><code class="language-xxx">` tags for syntax highlighting blocks of code.

For example, the opening tags for the following would be `<pre><code class="language-ebnf">`:
![](https://raw.githubusercontent.com/moonbuck/plugin-prismjs/main/ebnf_grammar.jpeg)

The configuration for the Javascript that lives at `static/assets/js/prism.js` is captured by its monster opening comment block:

```js
/* PrismJS 1.25.0
https://prismjs.com/download.html#themes=prism&languages=markup+css+clike+javascript+abap+abnf+actionscript+ada+agda+al+antlr4+apacheconf+apex+apl+applescript+aql+arduino+arff+asciidoc+aspnet+asm6502+asmatmel+autohotkey+autoit+avisynth+avro-idl+bash+basic+batch+bbcode+bicep+birb+bison+bnf+brainfuck+brightscript+bro+bsl+c+csharp+cpp+cfscript+chaiscript+cil+clojure+cmake+cobol+coffeescript+concurnas+csp+coq+crystal+css-extras+csv+cypher+d+dart+dataweave+dax+dhall+diff+django+dns-zone-file+docker+dot+ebnf+editorconfig+eiffel+ejs+elixir+elm+etlua+erb+erlang+excel-formula+fsharp+factor+false+firestore-security-rules+flow+fortran+ftl+gml+gap+gcode+gdscript+gedcom+gherkin+git+glsl+gn+go+graphql+groovy+haml+handlebars+haskell+haxe+hcl+hlsl+hoon+http+hpkp+hsts+ichigojam+icon+icu-message-format+idris+ignore+inform7+ini+io+j+java+javadoc+javadoclike+javastacktrace+jexl+jolie+jq+jsdoc+js-extras+json+json5+jsonp+jsstacktrace+js-templates+julia+keepalived+keyman+kotlin+kumir+kusto+latex+latte+less+lilypond+liquid+lisp+livescript+llvm+log+lolcode+lua+magma+makefile+markdown+markup-templating+matlab+maxscript+mel+mermaid+mizar+mongodb+monkey+moonscript+n1ql+n4js+nand2tetris-hdl+naniscript+nasm+neon+nevod+nginx+nim+nix+nsis+objectivec+ocaml+opencl+openqasm+oz+parigp+parser+pascal+pascaligo+psl+pcaxis+peoplecode+perl+php+phpdoc+php-extras+plsql+powerquery+powershell+processing+prolog+promql+properties+protobuf+pug+puppet+pure+purebasic+purescript+python+qsharp+q+qml+qore+r+racket+cshtml+jsx+tsx+reason+regex+rego+renpy+rest+rip+roboconf+robotframework+ruby+rust+sas+sass+scss+scala+scheme+shell-session+smali+smalltalk+smarty+sml+solidity+solution-file+soy+sparql+splunk-spl+sqf+sql+squirrel+stan+iecst+stylus+swift+systemd+t4-templating+t4-cs+t4-vb+tap+tcl+tt2+textile+toml+tremor+turtle+twig+typescript+typoscript+unrealscript+uri+v+vala+vbnet+velocity+verilog+vhdl+vim+visual-basic+warpscript+wasm+web-idl+wiki+wolfram+wren+xeora+xml-doc+xojo+xquery+yaml+yang+zig&plugins=line-numbers+toolbar+copy-to-clipboard */ 
```

The functionality of the page was spotty, but the following link oughta load that monster configuration up there into the  [Prism Download Page ](https://prismjs.com/download.html#themes=prism&languages=markup+css+clike+javascript+abap+abnf+actionscript+ada+agda+al+antlr4+apacheconf+apex+apl+applescript+aql+arduino+arff+asciidoc+aspnet+asm6502+asmatmel+autohotkey+autoit+avisynth+avro-idl+bash+basic+batch+bbcode+bicep+birb+bison+bnf+brainfuck+brightscript+bro+bsl+c+csharp+cpp+cfscript+chaiscript+cil+clojure+cmake+cobol+coffeescript+concurnas+csp+coq+crystal+css-extras+csv+cypher+d+dart+dataweave+dax+dhall+diff+django+dns-zone-file+docker+dot+ebnf+editorconfig+eiffel+ejs+elixir+elm+etlua+erb+erlang+excel-formula+fsharp+factor+false+firestore-security-rules+flow+fortran+ftl+gml+gap+gcode+gdscript+gedcom+gherkin+git+glsl+gn+go+graphql+groovy+haml+handlebars+haskell+haxe+hcl+hlsl+hoon+http+hpkp+hsts+ichigojam+icon+icu-message-format+idris+ignore+inform7+ini+io+j+java+javadoc+javadoclike+javastacktrace+jexl+jolie+jq+jsdoc+js-extras+json+json5+jsonp+jsstacktrace+js-templates+julia+keepalived+keyman+kotlin+kumir+kusto+latex+latte+less+lilypond+liquid+lisp+livescript+llvm+log+lolcode+lua+magma+makefile+markdown+markup-templating+matlab+maxscript+mel+mermaid+mizar+mongodb+monkey+moonscript+n1ql+n4js+nand2tetris-hdl+naniscript+nasm+neon+nevod+nginx+nim+nix+nsis+objectivec+ocaml+opencl+openqasm+oz+parigp+parser+pascal+pascaligo+psl+pcaxis+peoplecode+perl+php+phpdoc+php-extras+plsql+powerquery+powershell+processing+prolog+promql+properties+protobuf+pug+puppet+pure+purebasic+purescript+python+qsharp+q+qml+qore+r+racket+cshtml+jsx+tsx+reason+regex+rego+renpy+rest+rip+roboconf+robotframework+ruby+rust+sas+sass+scss+scala+scheme+shell-session+smali+smalltalk+smarty+sml+solidity+solution-file+soy+sparql+splunk-spl+sqf+sql+squirrel+stan+iecst+stylus+swift+systemd+t4-templating+t4-cs+t4-vb+tap+tcl+tt2+textile+toml+tremor+turtle+twig+typescript+typoscript+unrealscript+uri+v+vala+vbnet+velocity+verilog+vhdl+vim+visual-basic+warpscript+wasm+web-idl+wiki+wolfram+wren+xeora+xml-doc+xojo+xquery+yaml+yang+zig&plugins=line-numbers+toolbar+copy-to-clipboard "Prism Download Page").

I threw in the copy to clipboard plugin (which is dependent on the toolbar plugin) for that little copy button:

![](https://raw.githubusercontent.com/moonbuck/plugin-prismjs/main/css_grammar.jpeg)

I also include the line numbers plugin. It looks for tags that include a `line-numbers` class.

For example, the opening tags for this code might be `<pre><code class="language-json">`:

![](https://raw.githubusercontent.com/moonbuck/plugin-prismjs/main/json_grammar.jpeg)

Or, you could toss in the `line-numbers` class, kinda like `<pre class="line-numbers"><code class="language-json">`:

![](https://raw.githubusercontent.com/moonbuck/plugin-prismjs/main/json_grammar_line_numbers.jpeg)

I have noticed that the line number appearance can be kinda spotty as far as alignment. The probably seems to lie somewhere in the CSS. The HTML DOM contains the correct number of generated `<span>` tags to represent the lines.

Let’s check out the plugin parameters, shall we?

![](https://raw.githubusercontent.com/moonbuck/plugin-prismjs/main/plugin_parameters.jpeg)

Alrighty, first up is the theme. I rolled my own `darcula`-esque them and named it `moondeer`. This what you see above and get by default. I included the stylesheets for all the themes that were available on the download page as well. All the stylesheets live at `static/assets/css/prism-STYLE.css`. So the out of the box theme lives at `static/assets/css/prism-moondeer.css`. 

If you want to play around with the themes, these would be the supported parameter values: `moondeer`, `default`, `dark`, `coy`, `funky`, `okaidia`, `solarized-light`, `twilight`, `tomorrow-night`.

The stylesheet living at `static/assets/css/prism.css` addresses a line-number spacing issue I ran into.

So, the `Font Size` parameter gets inserted into the partial injected into the page `<head>`. Rather than maintain a bunch of stylesheets (and in order to parameterize it), I chose to set the size here and slap on `!important`.

I also chose to inject the Javascript here, figuring it would cut down on repainting highlighted text over the original input.

```go
{{ $theme := site.Params.prismjs_theme | default "moondeer" }}
<link rel="stylesheet" href="/assets/css/prism-{{ $theme }}.css">
<script src="/assets/js/prism.js"></script>
{{ $font_size := site.Params.prismjs_font_size | default "0.5rem" }}
<style>code[class*=language-],pre[class*=language-] { font-size: {{ $font_size }} !important; }</style>
```

Lastly, the `Line Numbers` parameter. This parameter only makes since for one reason … the cool f$&king shortcode I layed in there. It lives at `layouts/shortcodes/language.html`.

```go
{{- $language := false -}}
{{- if (and (and .IsNamedParams (.Get "language")) .Inner) -}}
  {{- $language = .Get "language" -}}
{{- else if (and (.Get 0) .Inner) -}}
  {{- $language = .Get 0 -}}
{{- end -}}

{{ if $language }}

{{- $code := .Inner | markdownify | chomp -}}

{{- if hasPrefix $code "<pre><code>" -}}

{{- $code = strings.TrimPrefix "<pre><code>" $code | strings.TrimSuffix "</code></pre>" -}}
{{- $code = htmlUnescape $code -}}
{{- $code = replaceRE "<" "&lt;" $code -}}
{{- $code = replaceRE "&" "&amp;" $code -}}

{{- $pre_class := "code-block" -}}
{{- if (and .IsNamedParams (.Get "line-numbers")) -}}
  {{- $pre_class = printf "%s line-numbers" $pre_class -}}
{{ else if (and (not .IsNamedParams) (and site.Params.prismjs_line_numbers (eq "true" site.Params.prismjs_line_numbers))) }}
  {{- $pre_class = printf "%s line-numbers" $pre_class -}}
{{- end -}}

<pre class="{{ $pre_class }}"><code class="language-{{ $language }}">
{{ printf "%s" $code | htmlUnescape | safeHTML }}
</code></pre>


{{ else if hasPrefix $code "<code>" }}

{{ $code = strings.TrimPrefix "<code>" $code | strings.TrimSuffix "</code>" }}

{{ $code = htmlUnescape $code }}

{{ $code = replaceRE "<" "&lt;" $code }}
{{ $code = replaceRE "&" "&amp;" $code }}

<code class="language-{{ $language }}">
{{ printf "%s" $code | htmlUnescape | safeHTML }}
</code>

{{ end }}

{{ end }}
```

The paired shortcode works with either a single, unnamed parameter specifying the language … kinda like…

```go
{{< language json >}}
	{
	  "currentlyreading": "*Books I am somewhat in the process of reading*",
	  "finishedreading": "*Books I've managed to get myself to read*",
	  "wanttoread": "*Books that gaze at me judingly from beneath the television, where they currently live, for having yet to crack their spine (f$&kers).*",
	  "didwanttoread": "*Books whose gaze of judgement I've kinda become okay with as my interest in reading them has waned.*"
	}
{{< /language >}}
```

or with named parameters … one mandatory and one optional. The mandatory named parameter is `language` and the optional parameter is `line-numbers`. This might look something like…

```go
{{< language language="json " line-numbers="true" >}}
	{
	  "currentlyreading": "*Books I am somewhat in the process of reading*",
	  "finishedreading": "*Books I've managed to get myself to read*",
	  "wanttoread": "*Books that gaze at me judingly from beneath the television, where they currently live, for having yet to crack their spine (f$&kers).*",
	  "didwanttoread": "*Books whose gaze of judgement I've kinda become okay with as my interest in reading them has waned.*"
	}
{{< /language >}}
```

The `Line Numbers` plugin parameter contols shortcode behaviour when left unspecified. This value defaults to `false`. If you set it to `"true"`, than invoking the unnamed parameter shortcode would result in a code block decorated with line numbers. The value set (or not set) for `Line Numbers` also controls the inclusion of line numbers when the named parameter `language` is used without supplying a `line-numbers` parameter to the shortcode. Supplying the value `"true"` for `line-numbers` oughta enable line numbers for a block of code being sent through the shortcode. And with that, the over-explanation of the `Line Numbers` parameter is complete.

Like nearly all my shortcodes these days, I created it as bridge between [Ulysses](https://ulysses.app/ "Ulysses") and my Micro.blog content. So, I can be all working up a sheet in Ulysses, and be all:

![](https://raw.githubusercontent.com/moonbuck/plugin-prismjs/main/ulysses.jpeg)

and then it comes out the other side all:

![](https://raw.githubusercontent.com/moonbuck/plugin-prismjs/main/json_grammar.jpeg)

It’s worth noting that I believe I have found a mobile Safari bug that affects the font-size of the highlighted text on an iPhone when in portrait. Your mileage may vary; but, [this](https://moondeer.blog/2021/10/30/okay-fk-it.html "iPhone Portrait Bug") was my experience.