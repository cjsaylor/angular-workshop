# Angular Workshop

This repo holds the content needed for learning the basics of angular.

The `/start` subdirectory is the application before any dynamic content is added. This
is meant for the student to begin with and add angular code/markup.

Each "step" will be outlined here and one solution to the step will be in subsequent step directories.

## Dependencies

Since this is meant to be done in a workshop environment where internet connectivity is not guaranteed,
all dependencies are committed into the `/lib` subdirectory.

The app itself is meant to run without any internet requirement.

* `angular.js` - v1.3.8 (unminified)
* `bootstrap.min.css` - v3.3

## Running on local file system

In order for any of the `$http` service calls to work, you will need to open Chrome with the `--allow-file-access-from-files` flag enabled:

* Mac

```
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --allow-file-access-from-files
```

* Linux

```
google-chrome --allow-file-access-from-files
```

* Windows

```
chrome.exe --allow-file-access-from-files
```
