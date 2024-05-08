require ('dotenv').config()

const { CONNECTION_STRING } = process.env

const Sequelize = require('sequelize')
const sequelize = new Sequelize(CONNECTION_STRING, {dialect: 'postgres'})

module.exports = {
    seed: (req, res) => {
        sequelize.query(`
            drop table if exists heroes;
            drop table if exists monsterdead;
            drop table if exists users;

            create table users (
                user_id serial primary key,
                username varchar (75),
                password varchar (25)
            );

            create table heroes (
                hero_id serial primary key,
                heroname varchar (80),
                herorank varchar (20),
                fightingstyle varchar (50),
                monsterskilled integer
            );

            create table monsterdead (
                monster_id serial primary key,
                monstername varchar (60),
                threatlevel varchar (6),
                timeofdeath date,
                hero_id integer
            );

            insert into heroes (heroname, herorank, fightingstyle)
            values('Demon Cyborg', 'S-Class rank 12', 'Absolute Destructive Power'),
                  ('Silver Fang', 'S-Class rank 3', 'Fist of FLowing Water, Crushing Rock'),
                  ('Scott Sutherland', 'A-Class rank 5', 'DevOps'),
                  ('Metal Bat', 'S-Class rank 15', 'Street Brawler');
        `).then(() => {
            console.log('DB seeded')
            res.sendStatus(200)
        }).catch(err => console.log('your DB game skills are lacking...', err))
    }
}

