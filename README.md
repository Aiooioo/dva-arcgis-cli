# dva-arcgis-cli
A command-line tool extends [dva-cli][3], with [JavaScript API for ArcGIS][4], using [esri-loader][2].

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
$ dva-arcgis new myapp --full
$ dva-arcgis new myapp --no-install
```

#### options

* `--full` -- A brand new boilerplate with full features **Recommand**
- >**Features in this full boilerplate:**
- >Upgrade [roadhog][1] to the latest version 2.x
- >Replace [esri-loader][2] with webpack **amd** mode
- >Apply redux middleware for map initialization, following [Esri/react-redux-js4][5]
- >Using raw ES6+

* `--no-install` -- Disable npm install after files created

### dva-arcgis init [options]

Create app in current directory. It's options is the same as `dva-arcgis new`.

## Configuration

dva-arcgis-cli use [roadhog][1] for build and server, view [roadhog#Configuration](https://github.com/sorrycc/roadhog/blob/master/README_en-us.md#configuration) ([中文版](https://github.com/sorrycc/roadhog#配置)) for details.

## License

[MIT](https://tldrlegal.com/license/mit-license)


[1]: https://github.com/sorrycc/roadhog
[2]: https://github.com/Esri/esri-loader
[3]: https://github.com/dvajs/dva-cli
[4]: https://js.arcgis.com
[5]: https://github.com/Esri/react-redux-js4