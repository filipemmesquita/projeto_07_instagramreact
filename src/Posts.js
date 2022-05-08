import React from 'react';

export default function Posts(){
    const users=["meowed","barked"]
    const userProfile=["assets/img/meowed.svg", "assets/img/barked.svg"]
    const postImages=["assets/img/dog.svg","assets/img/gato-telefone.svg"]
    const firstLike=["adorable_animals","respondeai"]
    const firstLikeProfiles=["assets/img/adorable_animals.svg", "assets/img/respondeai.svg"]
    return (
    <div class="posts">
        
        {users.map ((user, index)=> <Post user={user} userProfile={userProfile[index]} postImage={postImages[index]} firstLike={firstLike[index]} firstLikeProfile={firstLikeProfiles[index]} />)}
        
    </div>
    );
}
function Post(props){
    return(
        <div class="post">
          <div class="topo">
            <div class="usuario">
              <img src={props.userProfile} />
              {props.user}
            </div>
            <div class="acoes">
              <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
          </div>

          <div class="conteudo">
            <img src={props.postImage} />
          </div>

          <div class="fundo">
            <PostActions />

            <div class="curtidas">
              <img src={props.firstLikeProfile} />
              <div class="texto">
                Curtido por <strong>{props.firstLike}</strong> e <strong>outras 101.523 pessoas</strong>
              </div>
            </div>
          </div>
        </div>
    );
}
const INITIALVALUE="heart-outline"
function PostActions(props){
  const [isLiked, setIsLiked] = React.useState(INITIALVALUE);
  function likeUnlike(){
    if(isLiked=="heart-outline"){
      setIsLiked("heart");
    }
    if(isLiked=="heart"){
      setIsLiked("heart-outline");
    }
  }
  return(
  <div class="acoes">
    <div>
      <ion-icon name={isLiked} onClick={likeUnlike}></ion-icon>
      <ion-icon name="chatbubble-outline"></ion-icon>
      <ion-icon name="paper-plane-outline"></ion-icon>
    </div>
    <div>
      <ion-icon name="bookmark-outline"></ion-icon>
    </div>
  </div>
  );
}