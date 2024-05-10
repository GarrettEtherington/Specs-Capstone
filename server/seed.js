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
                heroclass varchar (1),
                herorank varchar (20),
                heropic text,
                about varchar (400),
                fightingstyle varchar (200),
                monsterskilled varchar []
            );

            create table monsterdead (
                monster_id serial primary key,
                monstername varchar (60),
                threatlevel varchar (6),
                timeofdeath date,
                hero_id integer
            );

            insert into heroes (heroname, heroclass, herorank, about, fightingstyle, monsterskilled)
            values('Demon Cyborg', 'S', '12', 'Genos is a mechanical cyborg of average human height. His face and ears look like that of a normal human, made of artificial skin material, and his eyes have black sclera with yellow irises. He has spiky blond hair and his eyebrows are blond.', 'Absolute Destructive Power', ARRAY ['Elonagted Muskrat', 'Asteroid Belter', 'Diamond-Back Slugger', 'Tall Gary']),
                  ('Silver Fang', 'S', '3', 'Bang is an elderly man and walks with a slight hunch in his back. He has light blue eyes and tan skin. He has spike white hair, thick white eyebrows, and a thick white mustache. He wears a long-sleeved black martial arts jumpsuit, light-colored pants, and Tai Chi slippers. Despite his old age, his body is lean and very muscular, and it is covered in scars.', 'Fist of FLowing Water, Crushing Rock', ARRAY ['Jimmy Dean', 'Cookie Monster', 'Queens Chariot', 'The Pawn']),
                  ('Scott Sutherland', 'A', '5', 'Scott Sutherland is a young man who cant grow a beard. He has darker brown hair and completely white eyes. Most people first notice his imposing and powerful stature, even being compared to "a big ol bag of iron cheerios". Scott isnt one for fashion, and wears whatever gets the job done, while also not being uncomfortable.', 'DevOps', ARRAY ['Tower Of Pizza', 'Fear Mongrel', 'Unholy Ape']),
                  ('Metal Bat', 'S', '15', 'Metal Bat is a young man with black hair styled in a pompadour, and dark eyes that emphasize his hot temper. He wears black bontan pants and a black Japanese school uniform, which he drapes over his red long-sleeved turtleneck sweater.', 'Street Brawler', ARRAY ['Magma Slug', 'Danger Charles', 'Illegal Eagle', 'Cosmic Elmo', 'Big Sussy']);
        `).then(() => {
            console.log('DB seeded')
            res.sendStatus(200)
        }).catch(err => console.log('your DB game skills are lacking...', err))
    }
}

