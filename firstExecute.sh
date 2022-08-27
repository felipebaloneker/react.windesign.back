# Create Export Folder Path
export ROOT_FOLDER=$(pwd)

# create docker container
echo 'Create Docker Container'
docker-compose up -d

# Install Modules (Typescript)
echo 'Install Dependences'
yarn install

echo 'Run Migration'
# Run migrations
yarn typeorm migration:run

sleep 10
echo 'Run Sql'
# run sql
docker exec -i db psql --username postgres postgres < schema.sql