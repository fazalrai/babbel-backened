const createUserQuery =
  "INSERT INTO users(first_name, last_name, username, password, profile_picture, created_on) VALUES($1, $2, $3, $4, $5, $6) RETURNING *";

const getSingleUserQuery = "SELECT * FROM users WHERE id = $1";

const updateUserQuery =
  "UPDATE users SET first_name = $1, last_name = $2, username = $3, password = $4 where id=$5 RETURNING *";

const deleteUserQuery = "DELETE  FROM users WHERE id = $1";

const replaceUserProfilePicture =
  "Update users set profile_picture = $1 where id=$2 RETURNING profile_picture";

module.exports = {
  createUserQuery: createUserQuery,
  getSingleUserQuery: getSingleUserQuery,
  updateUserQuery: updateUserQuery,
  deleteUserQuery: deleteUserQuery,
  replaceUserProfilePicture: replaceUserProfilePicture,
};
