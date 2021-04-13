const getScores = async () => {
  const data = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Fw4h5zsu1gzlNsfCifNc/scores/');
  const response = await data.json();
  return response.result;
};

const setScore = async (name, score) => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Fw4h5zsu1gzlNsfCifNc/scores/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user: name, score }),
  });
  return response.json();
};

export { getScores, setScore };