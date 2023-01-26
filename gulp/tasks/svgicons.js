import svgIcons from "gulp-svg-sprite";

export const svgicons = () => {
    return app.gulp.src(`${app.path.src.svgicons}`, {})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "SVG ICONS",
                message: "Error: <% error.message %>"
            }))
        )

        .pipe(svgIcons({
            mode: {
                stack: {
                    sprite: `../img/icons/icons.svg`,
                    example: true
                }
            },
        }
        ))
        .pipe(app.gulp.dest(`${app.path.build.images}`));
}