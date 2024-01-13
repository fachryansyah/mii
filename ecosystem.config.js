module.exports = {
  apps: [
    {
      name: "pkm",
      script: "serve dist -n -p 6000", // Path to the compiled main.js file
      instances: 1, // Number of instances to run
      autorestart: true, // Automatically restart the app if it crashes
      watch: false, // Set to true to enable file watching and automatic restart on file changes
    },
  ],
};
