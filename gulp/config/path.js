import * as nodePath from 'path';

const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
    build: {
        fonts: `${buildFolder}/fonts/`,
        images: `${buildFolder}/img/`,
        css: `${buildFolder}/css/`,
        js: `${buildFolder}/js/`,
        html: `${buildFolder}/`,
        files: `${buildFolder}/files/`,
    },
    src: {
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
        svg: `${srcFolder}/img/**/*.svg`,
        scss: `${srcFolder}/scss/style.scss`,
        js: `${srcFolder}/js/app.js`,
        html: `${srcFolder}/*.html`,
        files: `${srcFolder}/**/*.*`,
        svgicons: `${srcFolder}/img/svgicons/*.svg`,
    },
    watch: {
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,svg}`,
        scss: `${srcFolder}/scss/**/*.scss`,
        js: `${srcFolder}/js/**/*.js`,
        html: `${srcFolder}/**/*.html`,
        files: `${srcFolder}/**/*.*`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ``
}