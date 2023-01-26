            import dartSass from "sass";
            import gulpSass from "gulp-sass";
            import rename from "gulp-rename";

            import cleanCss from "gulp-clean-css";
            import webpcss from "gulp-webpcss";
            import autoprefixer from "gulp-autoprefixer";
            import groupCssMediaQuaries from "gulp-group-css-media-queries";

            const sass = gulpSass(dartSass);

            export const scss = () => {
                return app.gulp.src(app.path.src.scss, { sourcemaps: true })
                    .pipe(app.plugins.plumber(
                        app.plugins.notify.onError({
                            message: "Error: <%= error.message %>",
                            title: "SCSS"
                        }))
                    )
                    .pipe(app.plugins.replace(/@img\//g, '../img/'))
                    .pipe(sass({
                        outputStyle: "expanded"
                    }))
                    .pipe(groupCssMediaQuaries())
                    .pipe(webpcss({
                        webpClass: ".webp",
                        noWebpClass: ".no-webp"
                    }))
                    .pipe(autoprefixer({
                        grid: true,
                        overrideBrowserslist: ['Firefox ESR, Firefox >= 2, iOS 7, not dead, > 0.5%, last 15 versions'],
                        flexbox: true,
                        cascade: true
                    }))
                    .pipe(app.gulp.dest(app.path.build.css))
                    .pipe(cleanCss({ level: { 1: { specialComments: 0 } } }))
                    .pipe(rename({
                        extname: ".min.css"
                    }))
                    .pipe(app.gulp.dest(app.path.build.css))
                    .pipe(app.plugins.browsersync.stream());
            }