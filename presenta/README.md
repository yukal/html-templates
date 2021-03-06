# template-presenta
An adaptive html template

Due to the fact that the engine is very outdated and it became impossible to maintain, this template is marked as "xovno(ode" and currently undergoing deep code refactoring. 
Any dependencies like jQuery and Bootstrap are in the process of being demolished and the core engine is under reconstruction. But you can take a 
look at the oldest and the newest preview pages:
- [v1](http://trivian.epizy.com/)
- [v2.1](http://trivian.epizy.com/afpkfEokOiWWvCkqZ97KDIDsSM25QafT)
- [v2.2](http://trivian.epizy.com/STX4VnsIN0N2cKUoY1UGEHn4UhdlPekC/)

Install:
--------

```bash
$ git clone https://github.com/yukal/template-presenta.git
$ cd template-presenta

# Install Gulp CLI globally
$ npm i -g gulp-cli
# Install dependencies locally
$ npm i

# Alternative way
# Install dependencies if not installed yet and run build
$ ./make
```

Usage:
--------

```bash
# Cleanup dest directory
$ gulp clean

# Build
$ gulp build
$ gulp

# Build partials
$ gulp assets
$ gulp html
$ gulp sass
$ gulp js

# Run watcher with BrowserSync
$ gulp watch

# Packaging source files
$ ./make 7z
$ ./make zip
$ ./make tar
```

### License
All script files are under the MIT license except the media files and the logotype.
