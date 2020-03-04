# os2display administrator interface

For general information  see the https://github.com/os2display/docs in the docs repository.

## Docker

Getting started:
```
# Clone middleware and search-node from github
./install.sh

# Boot docker containers
itkdev-docker-compose up -d
itkdev-docker-compose open

# :9200 for elasticsearch
# :8001 for search
# :8002 for middleware

# Setup admin
itkdev-docker-compose composer install
itkdev-docker-compose bin/console cache:warmup
itkdev-docker-compose bin/console doctrine:migrations:migrate
itkdev-docker-compose bin/console fos:user:create --super-admin

# Activate all templates
itkdev-docker-compose bin/console os2display:core:templates:load
itkdev-docker-compose bin/console doctrine:query:sql "UPDATE ik_screen_templates SET enabled=1;"
itkdev-docker-compose bin/console doctrine:query:sql "UPDATE ik_slide_templates SET enabled=1;"

# Wait a bit until elasticsearch is ready.

# Initialize the search indexes
itkdev-docker-compose exec search-node bash
./search_activate.sh
./search_initialize.sh
exit
```
