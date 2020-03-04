# ${title}

this is the
[@magic-modules](https://github.com/magic-modules)
Pre component.

${description}

<GitBadges>magic-modules/pre</GitBadges>

## installation

`npm install @magic-modules/pre`

## usage

in a page/component, just pass some string to the markdown code component:

```
\\\`\\\`\\\`
export const View = () => Pre('const js = true')
\\\`\\\`\\\`
```

renders

```const js = true```


single line code also works:

<Pre>\`one line of code\`</Pre>

renders

`one line of code`


## themes

pre supports two color themes. It will automatically adapt to the global theme settings.

the @magic-modules/[light-switch](https://github.com/magic-modules/light-switch)
 module allows users to toggle dark/light modes, which will also recolor pre to match.

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

## source

the source for this page is in the
[example directory](https://github.com/magic-modules/pre/tree/master/example),
and gets built and published to github using
[@magic/core](https://github.com/magic/core)

