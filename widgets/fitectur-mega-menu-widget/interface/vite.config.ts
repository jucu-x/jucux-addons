import { defineConfig } from "vite";

export default defineConfig({
    build: {
        rollupOptions: {
            output: {
                assetFileNames: (assetInfo) => {
                    let extType = assetInfo?.name?.split(".")[1];
                    if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType?extType:"")) {
                        extType = "img";
						return `assets/${extType}/[name]-[hash][extname]`;
                    }
                    return `style[extname]`;
                },
                entryFileNames: "main.js",
            },
        },
        outDir: "../dist",
    },
});
