document.addEventListener('DOMContentLoaded', async function() {

    const avatar = document.querySelector('.profile-avatar');
    const nameElement = document.querySelector('.profile-name');
    const usernameElement = document.querySelector('.profile-username');
    
    const reposElement = document.querySelectorAll('.numbers-item')[0];
    const followersElement = document.querySelectorAll('.numbers-item')[1];
    const followingElement = document.querySelectorAll('.numbers-item')[2];
    
    const linkElement = document.querySelector('.profile-link');

    try {
        const resposta = await fetch('https://api.github.com/users/VitorV9');
        
        if (!resposta.ok) {
            throw new Error('Usuário não encontrado ou erro no servidor');
        }

        const json = await resposta.json();

        avatar.src = json.avatar_url;
        nameElement.innerText = json.name;
        usernameElement.innerText = `@${json.login}`;
        
        reposElement.innerHTML = `<h4>Repositórios</h4>\n${json.public_repos}`;
        followersElement.innerHTML = `<h4>Seguidores</h4>\n${json.followers}`;
        followingElement.innerHTML = `<h4>Seguindo</h4>\n${json.following}`;
        
        linkElement.href = json.html_url;

    } catch (erro) {
        console.error("Ocorreu um problema com a requisição da API:", erro);
        alert("Não foi possível carregar os dados do perfil.");
    }
});