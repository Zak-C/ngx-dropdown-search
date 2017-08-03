export default {
    entry: 'dist/index.js',
    dest: 'dist/bundles/ngx-dropdown-search.umd.js',
    sourceMap: false,
    format: 'umd',
    moduleName: 'ng.ngx-dropdown-search',
    globals: {
        '@angular/core': 'ng.core',
        '@angular/common': 'ng.common',
        '@angular/forms': 'ng.forms'
    },
    external: [
        '@angular/core',
        '@angular/common',
        '@angular/forms'
    ]
}