"use server";
export const addFavorite = async (id) => {
  const response = await fetch("https://api.thedogapi.com/v1/favourites", {
    method: "POST",
    headers: {
      "x-api-key": process.env.API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      image_id: id,
    }),
  });

  console.log("response", response);

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Could not add favorite: ${response.status} ${errorBody}`);
  }

  return response.json();
};

export const removeFavorite = async (favoriteId) => {
  const response = await fetch(
    `https://api.thedogapi.com/v1/favourites/${favoriteId}`,
    {
      method: "DELETE",
      headers: {
        "x-api-key": process.env.API_KEY,
      },
    },
  );

  if (!response.ok) {
    throw new Error(`Could not remove favorite: ${response.status}`);
  }
};
