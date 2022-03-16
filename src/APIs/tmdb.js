const tmdbApiKey = process.env.REACT_APP_TMDB_KEY;

const actorsBaseUrl = `https://api.themoviedb.org/3/person/popular?api_key=${tmdbApiKey}`;

const profilePictureBaseUrl = "https://image.tmdb.org/t/p/w185";

const getActors = async (page = 1) => {
  const finalUrl = `${actorsBaseUrl}&page=${page}`;
  const dbResponse = await fetch(finalUrl);
  if (!dbResponse.ok) {
    throw new Error("Invalid database response!");
  }
  const actorData = await dbResponse.json();
  return actorData;
};

const getActorPictureList = async (page = 1) => {
  try {
    const actorData = await getActors(page);
    const pictureList = actorData.results.map((actorInfo) => {
      return `${profilePictureBaseUrl}${actorInfo.profile_path}`;
    });

    return pictureList;
  } catch (error) {
    console.error(error);
  }
};

export { getActors, getActorPictureList };
