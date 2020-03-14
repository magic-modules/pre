# ${title}

this is the
[@magic-modules](https://github.com/magic-modules)
Pre component.

${description}

<GitBadges>@magic-modules/pre</GitBadges>

## installation

`npm install @magic-modules/pre`

## usage

### multi line

in a page/component, just pass some string to the markdown code component:

```
\`\`\`
const foo = bar => {
  console.log(bar)
}
\`\`\`
```

renders

```
const foo = bar => {
  console.log(bar)
}
```


### single lines

single line code blocks work:

<Pre lines="false">`one line of code`</Pre>

renders

`one line of code`


### native module

if the string passed to Pre has to include a \`, the &lt;Pre> module can be used directly:

#### single line

<Pre lines="false">&lt;Pre lines="false">`line of code`&lt;Pre></Pre>

renders

<Pre lines="false">`line of code`</Pre>

## themes

pre supports two color themes. It will automatically adapt to the global theme settings.

the @magic-modules/[light-switch](https://github.com/magic-modules/light-switch)
module allows users to toggle dark/light modes, which will also recolor pre to match.

if you have javascript activated,
just click the small lightbulb in the top right corner of this page to test this.

## syntax

### #syntax- comments

Pre can handle single line comments starting with: //.
Multiline comments are on the todo list.

```const v = "t" // single line comment```

### #syntax- urls

Pre can handle urls even though they look like comments.
Those urls will even turn into Link elements.
Urls are identified by containing the three characters ://

```https://jaeh.at```

Pre even handles links in comments and strings

```before comment // comment http://link.in.comment```

### #syntax- emails

Pre finds emails in your text.
emails can either start with mailto: or must include at least one dot \\\`.\\\`
and at least one \\\`@\\\`.

yes, strictly speaking, name@host is a valid email, but how often have you seen that?

if you actually do need support for name@local, please file an issue.

### examples

```mail@jaeh.at```

```mailto:mail@jaeh.at```

link in a comment:

```
const v = "t" // comment https://jaeh.at
// and in a comment starting the line https://wizardsatwork.at
```

Without line numbers

```
&lt;Pre lines="false">
String to highlight
without
line
numbers
&lt;/Pre>
```

<Pre lines="false">
String to highlight
without
line
numbers
</Pre>

# comments with indent

comments can be indented:

```
// no indent
  // 2 spaces
    // 4 spaces
```


#### multiline

multiline strings and comments currently do not get handled

```
&lt;Pre>
\`
Multiline
string
\`

\`
Second
Multiline
String
\`
&lt;/Pre>
```

renders

<Pre>
\`
Multiline
string.
\`

\`
Second
Multiline
String
\`
</Pre>

multiline comments

<Pre>
\`\`\`
/*
multiline
comments
\*/
\`\`\`
</Pre>

renders

```
/*
multiline
comments
*/
```

## source

the source for this page is in the
[example directory](https://github.com/magic-modules/pre/tree/master/example),
and gets built and published to github using
[@magic/core](https://github.com/magic/core)

