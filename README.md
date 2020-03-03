# os2display administrator interface

For general information  see the https://github.com/os2display/docs in the docs repository.

## Docker

Getting started:
```
# Clone middleware and search-node from github
./install.sh

# Boot docker containers
idc up -d
idc open

# :9200 for elasticsearch
# :8001 for search
# :8002 for middleware

# Setup admin
idc composer install
idc bin/console cache:warmup
idc bin/console doctrine:migrations:migrate
idc bin/console fos:user:create --super-admin

# Activate all templates
idc bin/console os2display:core:templates:load
idc bin/console doctrine:query:sql "UPDATE ik_screen_templates SET enabled=1;"
idc bin/console doctrine:query:sql "UPDATE ik_slide_templates SET enabled=1;"

# Wait a bit until elasticsearch is ready.

# Initialize the search indexes
idc exec search-node bash
./search_activate.sh 
./search_initialize.sh
```
