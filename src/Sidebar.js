function Sidebar(){
  const users=["bad.vibes.memes","chibirdart","razoesparaacreditar","adorable_animals","smallcutecats"]
  const userProfiles=["assets/img/bad.vibes.memes.svg","assets/img/chibirdart.svg","assets/img/razoesparaacreditar.svg","assets/img/adorable_animals.svg","assets/img/smallcutecats.svg"]
  const whySuggested=["Segue você","Segue você","Novo no Instagram","Segue você","Segue você"]
  return (
        <div class="sidebar">
        <User userNick="catanacomics" userName="Catana" userProfile="assets/img/catanacomics.svg" />

        <div class="sugestoes">
            <div class="titulo">
              Sugestões para você
              <div>Ver tudo</div>
            </div>
            {users.map((user, index)=> <Suggestion user={user} userProfile={userProfiles[index]} whySuggested={whySuggested[index]} />)}

        </div>

          <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
          </div>

          <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
          </div>
        </div>
      
    );
}
function User(props){
  return(
    <div class="usuario">
      <img src={props.userProfile} />
        <div class="texto">
          <strong>{props.userNick}</strong>
        {props.userName}
      </div>
    </div>
  );
}
function Suggestion(props){
  return(
  <div class="sugestao">
    <div class="usuario">
      <img src={props.userProfile} />
      <div class="texto">
        <div class="nome">{props.user}</div>
        <div class="razao">{props.whySuggested}</div>
      </div>
    </div>
    <div class="seguir">Seguir</div>
  </div>
  );
}
export default Sidebar;