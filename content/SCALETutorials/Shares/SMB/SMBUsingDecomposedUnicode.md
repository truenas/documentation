---
title: "SMB Share MacOS Client Limitations When Using Decomposed Unicode Characters"
description: "Provides information on SMB share MacOS client limitation when using decomposed unicode characters."
weight: 50
tags:
 - smb
---

There are normalize forms for a unicode character with diacritical marks: decomposed (NFD) and pre-composed (NFC). 

Take for example the character ä (a + umlaut) and the encoding differences between NFC (b'\xc3\xa4') and NFD (b'a\xcc\x88').

The MacOS SMB client historically and at present forces normalization of unicode strings to NFC prior to generating network traffic to the remote SMB server.

The practical impact of this is that a file that contains NFD diacritics on a remote SMB server (TrueNAS, Windows, etc.) might be visible in the directory listing in the MacOS SMB client and thereby **Finder**, but any operations on the file (edits, deletions, etc.) have undefined behaviors since a file with NFC diacritics does not exist on the remote server.

```
>>> os.listdir(".")
['220118_M_HAN_MGK_X_4_Entwässerung.pdf']

>>> os.unlink('220118_M_HAN_MGK_X_4_Entwässerung.pdf')

Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
FileNotFoundError: [Errno 2] No such file or directory: '220118_M_HAN_MGK_X_4_Entwässerung.pdf'

>>> os.listdir(".")
['220118_M_HAN_MGK_X_4_Entwässerung.pdf']
```

Above is a short example of a MacOS SMB client attempting to delete a file with NFD normalization on remote Windows server.

Short of Apple providing a fix for this, the only strategy for an administrator to address these issues is to rename the files with pre-composed (NFC) form. Unfortunately, normalization is not guaranteed to be lossless.

For more information see [Unicode Normalization Forms](https://unicode.org/reports/tr15/) or [Combining Diacritical Marks](https://unicode.org/charts/PDF/U0300.pdf).
