# os2display administrator interface

For general information  see the https://github.com/os2display/docs in the docs repository.

## Docker

Getting started:
```
# Clone middleware and search-node from github
./scripts/install.sh

# Boot docker containers
itkdev-docker-compose up -d

# Optional: Install composer parallel download
itkdev-docker-compose composer global require hirak/prestissimo

# Setup admin
itkdev-docker-compose composer install -o
itkdev-docker-compose bin/console cache:warmup
itkdev-docker-compose bin/console doctrine:migrations:migrate
itkdev-docker-compose bin/console fos:user:create --super-admin

# Activate all templates
itkdev-docker-compose bin/console os2display:core:templates:load
itkdev-docker-compose bin/console doctrine:query:sql "UPDATE ik_screen_templates SET enabled=1;"
itkdev-docker-compose bin/console doctrine:query:sql "UPDATE ik_slide_templates SET enabled=1;"

# Initialize the search indexes by accessing search-node container.
itkdev-docker-compose exec search-node bash -c './search_activate.sh'
itkdev-docker-compose exec search-node bash -c './search_initialize.sh'

# Optional: If you want automatic cron calls to push content every minute.
# Alternativ: manually call `itkdev-docker-compose bin/console os2display:core:cron` when content has been updated.
itkdev-docker-compose exec phpfpm bash
apt-get update
apt-get install nano cron -y
crontab -l > mycron
echo "*/1 * * * * /usr/bin/php /app/bin/console os2display:core:cron" >> mycron
crontab mycron
rm mycron
exit

# Open the site
itkdev-docker-compose open

# :8001 for search administration
# :8002 for middleware adminstration
# :9200 for elasticsearch

# Fix permission issues to var/
itkdev-docker-compose exec phpfpm bash -c 'chmod -R 777 var'
```

The `vendor/` and `var/` folders are not syncronized since this impacts performance a lot.

If you need the vendor folder outside of the container, install it there as well.

## Development

To work on a repository, replace it in packages.
