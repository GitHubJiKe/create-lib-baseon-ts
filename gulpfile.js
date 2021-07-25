const { src, dest, watch, series } = require("gulp");
const uglify = require("gulp-uglify");
const ts = require("gulp-typescript");
const tsProject = ts.createProject("tsconfig.json");

const compress = () => src("lib/*.js").pipe(uglify()).pipe(dest("lib"));

const build = () => src("src/*.ts").pipe(tsProject()).pipe(dest("lib"));

const buildAndCompress = series(build, compress);

const watchBuild = () => watch("src/*.ts", buildAndCompress);

const compileTask = process.env.NODE_ENV === "dev" ? watchBuild : buildAndCompress;

exports.default = compileTask;
