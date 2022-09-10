const createLessonQuery =
  "INSERT INTO lessons (name, lesson_text, language_taught, created_on) VALUES($1, $2, $3, $4) RETURNING *";

const getAllLessonQuery = "SELECT * FROM lessons";

const updateSingleLessonQuery =
  "UPDATE lessons SET name = $1, lesson_text = $2, language_taught = $3 where id=$4 RETURNING *";

const deleteSingleLessonQuery = "DELETE FROM lessons WHERE id = $1";

module.exports = {
  createLessonQuery: createLessonQuery,
  getAllLessonQuery: getAllLessonQuery,
  updateSingleLessonQuery: updateSingleLessonQuery,
  deleteSingleLessonQuery: deleteSingleLessonQuery,
};
