{{ with .Scratch.Get "plugin-prism.Parameters" -}}

// Link unminified grammars when specified
{{- if not .Config.MinifyScript -}}
Prism.plugins.autoloader.use_minified = false;
{{- end }}

// Determine whether whitespace normalization should be customized
{{- with .Whitespace -}}
Prism.plugins.NormalizeWhitespace.setDefaults({
  {{- if (isset . "RemoveTrailing") -}}
  'remove-trailing':{{ .RemoveTrailing }},
  {{- end -}}
  {{- if (isset . "RemoveIndent") -}}
  'remove-indent':{{ .RemoveIndent }},
  {{- end -}}
  {{- if (isset . "LeftTrim") -}}
  'left-trim':{{ .LeftTrim }},
  {{- end -}}
  {{- if (isset . "RightTrim") -}}
  'right-trim':{{ .RightTrim }},
  {{- end -}}
  {{- with .BreakLines -}}
  'break-lines':{{ . }},
  {{- end -}}
  {{- with .Indent -}}
  'indent':{{ . }},
  {{- end -}}
  {{- if (isset . "RemoveInitialLineFeed") -}}
  'remove-initial-line-feed':{{ .RemoveInitialLineFeed }},
  {{- end -}}
  {{- with .TabsToSpaces -}}
  'tabs-to-spaces':{{ . }},
  {{- end -}}
  {{- with .SpacesToTabs -}}
  'spaces-to-tabs':{{ . }},
  {{- end -}}
  });
{{- end -}}

{{- end }}