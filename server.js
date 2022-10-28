const { build } = require("esbuild"),
    liveServer = require("live-server");

build({
    entryPoints: ['./src/index.js'],
    outfile: './public/bundle.js',
    bundle: true,
    loader: {
        '.js': 'jsx'
    },
    watch: {
        onRebuild(error, result) {
            if (error) console.error('watch build failed:', error)
            else console.log('watch build succeeded:', result)
        },
    },
}).then(result => {
    liveServer.start({
        port: 8000,
        host: 'localhost',
        root: "public",
        open: true,
        watch: "everything",
        ignore: 'scss,my/templates',
        file: "index.html",
        wait: 1000,
        mount: [['/components', './node_modules']],
        logLevel: 2,
        middleware: [function (req, res, next) { next(); }]
    });
    console.log('watching...', result)
})