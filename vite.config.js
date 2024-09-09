import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const target = "https://capstone-backend-1-fu98.onrender.com/api";

export default defineConfig({
	plugins: [react()],
	server: {
		proxy: {
			"/api": {
				target,
				changeOrigin: true,
				secure: true,
				rewrite: (path) => path.replace(/^\/api/, ""),
			},
		},
	},
});
