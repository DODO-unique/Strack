I would like to talk about `parseInt()` in [script.js](script.js):
This only reads the inital integers, otherwise it gives an error.

Suppose you go: parseInt('123🔥'), this reads 123 fine.
if you go parseInt('🔥123'), this does not work
if you go parseInt('12🔥3'), this would only work with 12