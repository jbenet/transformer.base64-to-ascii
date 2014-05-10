# transformer.base64-to-ascii

[Transformer](http://github.com/jbenet/transformer) conversion: base64 to ascii

This module is a transformer conversion, published on npm. Read more about transformer at:

- the transformer website: <http://transform.datadex.io>
- the transformer repository: <http://github.com/jbenet/transformer>

## Usage

Use this module through transformer.


### Commandline

```
> echo 'YmVlcCBib29w' | transform base64 ascii
beep boop
```

### Javascript

```js
var transformer = require('dat-transformer');
var tBase64ToAscii = transformer('base64', 'ascii');
tBase64ToAscii('YmVlcCBib29w'); // 'beep boop'
```
