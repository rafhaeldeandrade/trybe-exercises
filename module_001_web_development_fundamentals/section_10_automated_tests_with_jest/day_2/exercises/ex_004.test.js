const { getRepos } = require('./ex_004');

describe('Testing getRepos() function', () => {
  it('should return true if the repos exists', async () => {
    const url = 'https://api.github.com/orgs/tryber/repos';
    const data = await getRepos(url);
    expect(data).toContain('sd-01-week4-5-project-todo-list');
    expect(data).toContain('sd-01-week4-5-project-meme-generator');
  });
});
