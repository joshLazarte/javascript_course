class GitHub {
    constructor() {
        this.client_id = 'e85d47cb2263aef068d0';
        this.client_secret = '0197d120e23b1702722e71fb90dffdf20336fe19';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }
    
    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}
        ?client_id=${this.client_id}
        &client_secret=${this.client_secret}`);
        
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
        const profile = await profileResponse.json();
        const repos = await repoResponse.json();
        
        return {
          profile,
          repos
        };
    }
}