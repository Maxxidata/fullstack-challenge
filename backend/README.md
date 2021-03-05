<h3 align="center">API Backend</h3>

<br>

## Getting Started

#### 🖐 Requirements

- [Docker CE](https://docs.docker.com/install/)

#### 🚀 Start the project

1. Duplicate the `.env.template` file and rename to `.env` and edit de file with your configuration
2. Run using `docker-compose up --build -d`
3. After containers up, run the migrates `sh db.sh migrate`
4. If you want to, you can run `sh db.sh seed`