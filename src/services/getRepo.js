import axios from 'axios';
import base64 from 'hi-base64';
import getCommments from './comments';

const getData = (developer, repo) =>
  axios(`https://api.github.com/repos/${developer}/${repo}`).then(
    data => data.data
  );

const getReadme = (developer, repo) =>
  axios(`https://api.github.com/repos/${developer}/${repo}/readme`).then(
    data => data.data
  );

const getRepo = (developer, repo) =>
  axios
    .all([getReadme(developer, repo), getData(developer, repo)])
    .then(
      axios.spread((readme, data) =>
        getCommments(developer, repo)
          .then(comments => ({
            readme: base64.decode(readme.content),
            ...data,
            comments,
          }))
          .catch(() => ({
            readme: base64.decode(readme.content),
            ...data,
          }))
      )
    )
    .catch(
      axios
        .get('https://api.github.com/rate_limit')
        .then(data => console.table(data.data))
    );

export default getRepo;
