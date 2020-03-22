'use strict';

module.exports = {
  apps: [
    {
      name: 'MY-SERVICE-API',
      script: './bin/www',
      instances: 'max',
      autorestart: true,
      exec_mode: 'cluster',
      watch: false,
      max_memory_restart: '1G',
    },
  ],
};
