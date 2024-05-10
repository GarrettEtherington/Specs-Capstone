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
                fightingstyle varchar (700),
                monsterskilled varchar []
            );

            create table monsterdead (
                monster_id serial primary key,
                monstername varchar (60),
                threatlevel varchar (6),
                timeofdeath date,
                hero_id integer
            );

            insert into heroes (heroname, heroclass, herorank, heropic, about, fightingstyle, monsterskilled)
            values('Demon Cyborg', 'S', '12', '../Images/GenosProf.PNG', 'Genos is a mechanical cyborg of average human height. His face and ears look like that of a normal human, made of artificial skin material, and his eyes have black sclera with yellow irises. He has spiky blond hair and his eyebrows are blond.', 'Thanks to his cyborg physiology and experience, Genos is one of the most proficient fighters in the series. Genos can utilize his various enhancements to distract opponents and calculate how powerful they are, as well the exact amount of power he will need for battle and, as the series goes on, Genos improves his skills and capabilities as a cyborg. He makes use of a large variety of weaponry and upgrades in battle and is a very capable fighter in both close quarters and long-range fighting.', ARRAY ['Elonagted Muskrat', 'Asteroid Belter', 'Diamond-Back Slugger', 'Tall Gary', 'Sir Loin Of Beef', 'King Of Ham', 'Prince Of Ham', 'Camden', 'Kees', 'Quade']),
                  ('Silver Fang', 'S', '3', '../Images/BangProf.PNG', 'Bang is an elderly man and walks with a slight hunch in his back. He has light blue eyes and tan skin. He has spike white hair, thick white eyebrows, and a thick white mustache. He wears a long-sleeved black martial arts jumpsuit, light-colored pants, and Tai Chi slippers. Despite his old age, his body is lean and very muscular, and it is covered in scars.', ' From decades of experience and training, Bang is one of the most powerful martial artists in the world. Bang possesses a vast knowledge of martial arts and, as a result, was able to create his own martial art. He is considered to be the Greatest Treasure of Martial Arts', ARRAY ['Jimmy Dean', 'Cookie Monster', 'Queens Chariot', 'The Pawn', 'Powermouse', 'Gale Dragon', 'Bean From Beyond', 'Danger Noodle', 'Uneven Steven', 'Lobter']),
                  ('Scott Sutherland', 'A', '5', '../Images/ScottProf.PNG', 'Scott Sutherland is a young man who cant grow a beard. He has darker brown hair and completely white eyes. Most people first notice his imposing and powerful stature, even being compared to "a big ol bag of iron cheerios". Scott isnt one for fashion, and wears whatever gets the job done, while also not being uncomfortable.', 'Scott Utilizes a demi-cyborg mixed martial arts style known as DevOps. DevOps is pretty freaking cool bro.', ARRAY ['Dave', 'Dan', 'Deril', 'Durk', 'Derrick', 'Dakota', 'Dylan', 'Dean', 'Dawson', 'Damian']),
                  ('Metal Bat', 'S', '15', '../Images/BadProf.PNG', 'Metal Bat is a young man with black hair styled in a pompadour, and dark eyes that emphasize his hot temper. He wears black bontan pants and a black Japanese school uniform, which he drapes over his red long-sleeved turtleneck sweater.', 'Matching his appearance and demeanor, Metal Bat usually fights in a manner typical to that of delinquents where he uses his unbreakable bat to bash his opponents into submission or death with Garou judging Metal Bats overall fighting style to be like that of an amateur. However despite his lack of sophisticated techniques, his skills is shown to be effective against most monsters because of how simplistic they are, and by swinging his bat at different intervals and unorthodox ways, he can become more formidable.', ARRAY ['Magma Slug', 'Danger Charles', 'Illegal Eagle', 'Cosmic Elmo', 'Big Sussy', 'Tower Of Pizza', 'Fear Mongrel', 'Unholy Ape', 'Skyfrog', 'Tomar']);
        `).then(() => {
            console.log('DB seeded')
            res.sendStatus(200)
        }).catch(err => console.log('your DB game skills are lacking...', err))
    }
}

