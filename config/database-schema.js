const Pool = require('pg').Pool

const pool = new Pool({
    user: process.env.PGUSER || 'postgres',
    host: process.env.PGHOST || 'localhost',
    database: process.env.PGDATABASE || 'babbel1',
    password: process.env.PGPASSWORD || 'mishal',
    port: process.env.PGPORT || 5432
})

const usersTable = `CREATE TABLE IF NOT EXISTS Users (
    id serial PRIMARY KEY,
    first_name VARCHAR ( 50 ) NOT NULL,
    last_name VARCHAR ( 50 ) NOT NULL,
    username VARCHAR ( 50 ) UNIQUE NOT NULL,
    password VARCHAR ( 255 ) NOT NULL,
    profile_picture BYTEA,
    created_on TIMESTAMP NOT NULL,
    last_login TIMESTAMP );`


const languagesTable = `CREATE TABLE IF NOT EXISTS Languages (
    id serial PRIMARY KEY,
    name VARCHAR ( 90 ) NOT NULL UNIQUE,
    code VARCHAR ( 2 ) NOT NULL UNIQUE,
    created_on TIMESTAMP NOT NULL
 );`


const lessonsTable = `CREATE TABLE IF NOT EXISTS  Lessons (
	id serial PRIMARY KEY,
  	name VARCHAR ( 255 ) NOT NULL,
  	lesson_text TEXT NOT NULL UNIQUE,
  	language_taught INT NOT NULL UNIQUE,
	created_on TIMESTAMP NOT NULL,
  	CONSTRAINT fk_language
      FOREIGN KEY(language_taught) 
	  REFERENCES languages(id)
	ON DELETE CASCADE
 )`


const coursesTable = `CREATE TABLE IF NOT EXISTS Courses (
    id serial PRIMARY KEY,
      name VARCHAR ( 50 ) NOT NULL,
      active_lesson INT NOT NULL,
      owner INT NOT NULL,
      created_on TIMESTAMP NOT NULL,
    CONSTRAINT fk_lesson
        FOREIGN KEY(active_lesson) 
        REFERENCES lessons(id)
      ON DELETE CASCADE ,
    CONSTRAINT fk_owner
        FOREIGN KEY(owner) 
        REFERENCES users(id)
      ON DELETE CASCADE 
    );`

const courseLessonsTable = `CREATE TABLE IF NOT EXISTS CourseLessons (
        id serial PRIMARY KEY,
          course_id INT NOT NULL,
        lesson_id INT NOT NULL,
          created_on TIMESTAMP NOT NULL,
        CONSTRAINT fk_lesson
            FOREIGN KEY(lesson_id) 
            REFERENCES lessons(id)
          ON DELETE CASCADE ,
        CONSTRAINT fk_course
            FOREIGN KEY(course_id) 
            REFERENCES courses(id)
          ON DELETE CASCADE 
        );`

const createSchema = async () => {

    try {
        await pool.query(usersTable)
        await pool.query(languagesTable)
        await pool.query(lessonsTable)
        await pool.query(coursesTable)
        await pool.query(courseLessonsTable)
    }
    catch (err) {
        console.log(err)
    }
}
const result = createSchema()

module.exports.pool = pool
