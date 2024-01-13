module.exports = {
  apps : [{
    name: 'mii',
    script: 'serve dist/ src -n -p 6000',
    instances: 1,
    autorestart: true,
    watch: false,
    env: {
      NODE_ENV: 'production',
    },
  },]
}
