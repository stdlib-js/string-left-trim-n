<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# ltrimN

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Trim `n` characters from the end of a string.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/string-left-trim-n
```

</section>

<section class="usage">

## Usage

```javascript
var ltrimN = require( '@stdlib/string-left-trim-n' );
```

#### ltrimN( str, n\[, chars] )

Trims `n` characters from the beginning of a string.

```javascript
var str = '  foo  ';
var out = ltrimN( str, str.length );
// returns 'foo  '

out = ltrimN( str, 1 );
// returns ' foo  '
```

By default, the function trims whitespace characters. To trim a different set of characters instead, provide a string or an array of characters to trim:

```javascript
var str = '🐶🐶🐶 Animals 🐶🐶🐶';
var out = ltrimN( str, str.length, [ '🐶', ' ' ] );
// returns 'Animals 🐶🐶🐶'

out = ltrimN( str, str.length, '🐶 ' );
// returns 'Animals 🐶🐶🐶'
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var ltrimN = require( '@stdlib/string-left-trim-n' );

var out = ltrimN( '   Whitespace   ', 3 );
// returns 'Whitespace   '

out = ltrimN( '\t\t\tTabs\t\t\t', 2 );
// returns '\tTabs\t\t\t'

out = ltrimN( '~~~CUSTOM~~~', 3, '~' );
// returns 'CUSTOM~~~'
```

</section>

<!-- /.examples -->


<!-- Section for describing a command-line interface. -->

* * *

<section class="cli">

## CLI

<section class="installation">

## Installation

To use the module as a general utility, install the module globally

```bash
npm install -g @stdlib/string-left-trim-n
```

</section>

<section class="usage">

### Usage

```text
Usage: ltrimn [options] --n=<number>

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --n number            Number of characters to trim.
         --chars str           Characters to trim. Default: whitespace.
         --split sep           Delimiter for stdin data. Default: '/\\r?\\n/'.
```

</section>

<!-- /.usage -->

<!-- CLI usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

### Notes

-   If the split separator is a [regular expression][mdn-regexp], ensure that the `split` option is either properly escaped or enclosed in quotes.

    ```bash
    # Not escaped...
    $ echo -n $'   foo   \n   bar   \n' | ltrimn --split /\r?\n/

    # Escaped...
    $ echo -n $'   foo   \n   bar   \n' | ltrimn --split /\\r?\\n/
    ```

-   The implementation ignores trailing delimiters.

</section>

<!-- /.notes -->

<!-- CLI usage examples. -->

<section class="examples">

### Examples

```bash
$ ltrimn '   Whitespace   ' --n=3
Whitespace   
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n '~~~beep~boop~' | ltrimn --n=2 --chars '~'
~beep~boop~
```

By default, when used as a [standard stream][standard-streams], the implementation assumes newline-delimited data. To specify an alternative delimiter, set the `split` option.

```bash
$ echo -n '~~~foo~~~\t~~~bar~~~\t~~~baz~~~' | ltrimn --split '\t' --chars '~' --n=3
foo~~~ 
bar~~~
baz~~~
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/string-left-trim-n.svg
[npm-url]: https://npmjs.org/package/@stdlib/string-left-trim-n

[test-image]: https://github.com/stdlib-js/string-left-trim-n/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/string-left-trim-n/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/string-left-trim-n/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/string-left-trim-n?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/string-left-trim-n.svg
[dependencies-url]: https://david-dm.org/stdlib-js/string-left-trim-n/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/string-left-trim-n/main/LICENSE

[mdn-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

</section>

<!-- /.links -->
