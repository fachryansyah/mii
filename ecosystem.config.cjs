module.exports = {
  apps: [
    {
      name: "mii",
      script: "serve dist -n -p 7000", // Path to the compiled main.js file
      instances: 1, // Number of instances to run
      autorestart: true, // Automatically restart the app if it crashes
      watch: false, // Set to true to enable file watching and automatic restart on file changes
    },
  ],
};
