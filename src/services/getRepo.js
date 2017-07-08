import axios from 'axios';
import base64 from 'hi-base64';
import getCommments from './comments';

const base = 'https://api.github.com/repos';

const getData = (developer, repo) =>
  axios(`${base}/${developer}/${repo}`).then(data => data.data);

const getReadme = (developer, repo) =>
  axios(`${base}/${developer}/${repo}/readme`).then(data => data.data);

const getContribs = (developer, repo) =>
  axios(`${base}/${developer}/${repo}/stats/contributors`).then(data =>
    data.data.reverse().slice(0, 12)
  );

const getRepo = (developer, repo) =>
  axios
    .all([
      getReadme(developer, repo),
      getData(developer, repo),
      getContribs(developer, repo),
    ])
    .then(
      axios.spread((readme, data, contribs) =>
        getCommments(developer, repo)
          .then(comments => ({
            readme: base64.decode(readme.content),
            ...data,
            contribs,
            comments,
          }))
          .catch(() => ({
            readme: base64.decode(readme.content),
            ...data,
            contribs,
          }))
      )
    )
    .catch(
      axios
        .get('https://api.github.com/rate_limit')
        .then(data => console.table(data.data)) // eslint-disable-line no-console
    );

export default getRepo;
