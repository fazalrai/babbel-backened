const createLanguageQuery =
  "INSERT INTO languages(name, code, created_on) VALUES($1, $2, $3) RETURNING *";

const updateSingleLanguageQuery =
  "UPDATE languages SET name = $1, code = $2 where id = $3 RETURNING *";

const deleteSingleLanguageQuery = "DELETE FROM languages WHERE id = $1";

const deleteAllLanguagesQuery = "DELETE from languages";

const listAllLanguagesQuery = "SELECT * from languages";

module.exports = {
  createLanguageQuery: createLanguageQuery,
  deleteSingleLanguageQuery: deleteSingleLanguageQuery,
  updateSingleLanguageQuery: updateSingleLanguageQuery,
  deleteAllLanguagesQuery: deleteAllLanguagesQuery,
  listAllLanguagesQuery: listAllLanguagesQuery,
};
