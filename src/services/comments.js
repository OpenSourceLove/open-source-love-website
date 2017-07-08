import axios from 'axios';

const baseUrl = 'https://opensourcelove.github.io/open-source-love-data/';

const getCommments = (developer, repo) =>
  axios
    .get(`${baseUrl}${developer}/${repo}.json`)
    .then(data => data.data)
    .then(data => data.messages);

export default getCommments;
