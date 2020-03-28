'use strict';
module.exports = {
  apps: [
    {
      name: 'MY-SERVICE-API',
      script: './bin/www',
      instances: 0,
      autorestart: true,
      exec_mode: 'cluster',
      watch: false,
      max_memory_restart: '1G',
      exp_backoff_restart_delay: 100,
    },
  ],
};
