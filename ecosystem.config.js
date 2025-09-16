module.exports = {
  apps: [{
    name: 'edwardguillen',
    script: 'app.js',
    cwd: '/var/www/edwardguillen',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    error_file: '/var/log/pm2/edwardguillen-error.log',
    out_file: '/var/log/pm2/edwardguillen-out.log',
    log_file: '/var/log/pm2/edwardguillen-combined.log',
    time: true
  }]
};
