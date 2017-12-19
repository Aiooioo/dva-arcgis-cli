# dva-arcgis-cli
A command-line tool extends [dva-cli](https://github.com/dvajs/dva-cli), with [JavaScript API for ArcGIS](https://js.arcgis.com), using [esri-loader](https://github.com/Esri/esri-loader).

Using the latest ArcGIS JavaScript API version 4.6. Also compatible with 3.x. (For example: version 3.23)

## Getting Started

Install, create and start.

```bash
# Install
$ npm install dva-arcgis-cli -g

# Create app
$ dva-arcgis new myapp

# Start app
$ cd myapp
$ npm start
```

## Commands

We have 2 commands: `new`, `init`.

### dva-arcgis new <appName> [options]

Create app with new directory.

#### Usage Examples

```bash
$ dva-arcgis new myapp
$ dva-arcgis new myapp --demo
$ dva-arcgis new myapp --no-install
```

#### options

* `--demo` -- Generate a dead simple project for quick prototype
* `--no-install` -- Disable npm install after files created

### dva-arcgis init [options]

Create app in current directory. It's options is the same as `dva-arcgis new`.

## Configuration

dva-arcgis-cli use [roadhog](https://github.com/sorrycc/roadhog) for build and server, view [roadhog#Configuration](https://github.com/sorrycc/roadhog/blob/master/README_en-us.md#configuration) ([中文版](https://github.com/sorrycc/roadhog#配置)) for details.

## License

[MIT](https://tldrlegal.com/license/mit-license)Exten
