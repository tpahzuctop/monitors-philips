import gulp from "gulp";
import { path } from "./gulp/config/path.js";
import { plugins} from "./gulp/config/plugins.js";

global.app = {
    path: path,
    gulp: gulp,
    plugins: plugins
}

import { reset } from "./gulp/tasks/reset.js";
import { copy } from "./gulp/tasks/copy.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { otfToTtf, ttfToWoff, fontsStyle } from "./gulp/tasks/fonts.js";
import { svgicons } from "./gulp/tasks/svgicons.js";

function watcher() {
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.images, images);
}

export { svgicons }

const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);

//const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, scss, js, images));
const mainTasks = gulp.parallel(copy, html, js);
const img = gulp.series(images);
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
// const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher));

gulp.task('default', dev);
gulp.task('img', img);