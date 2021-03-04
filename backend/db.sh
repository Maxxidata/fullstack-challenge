help(){
echo "Please type a command, help:
command     Description
migrate     run the project migrates
";    
}

if [ "$1" = "migrate" ]
then
    docker exec -it backend_app_1 /bin/sh -c 'npm run db:migrate';
    echo "Done ...";
    exit 0
fi

help
