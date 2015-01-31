# Angular Workshop

This repo holds the content needed for learning the basics of angular.

The `/start` subdirectory is the application before any dynamic content is added. This
is meant for the student to begin with and add angular code/markup.

Each step directory will contain overview information and a list of tasks to complete. The solution to the tasks
are available in those directories.

## Dependencies

Since this is meant to be done in a workshop environment where internet connectivity is not guaranteed,
all dependencies are committed into the `/lib` subdirectory.

The app itself is meant to run without any internet requirement.

* `angular.js` - v1.3.8 (unminified)
* `angular-route.js` - v1.3.8 (unminified)
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

### Self hosting

There are some scripting languages that support a local webserver in place of running the browser in an unsecure fashion:

* PHP 5.4+

```bash
php -S localhost:4000
```

* Python

```bash
python -m SimpleHTTPServer
```

## Offline Package

[Complete offline package](https://github.com/cjsaylor/angular-workshop/releases/latest)

Included:

* Nodejs (OSX, Linux, Windows)
* Workshop files and assets
* Angular docs (v1.3.8)
