function Stories(){
    const users = ["9gag", "meowed", "barked", "nathanwpylestrangeplanet","wawawicomics","respondeai","filomoderna","memeriagourmet" ]
    const profileImages=["assets/img/9gag.svg", "assets/img/meowed.svg", "assets/img/barked.svg", "assets/img/nathanwpylestrangeplanet.svg","assets/img/wawawicomics.svg", "assets/img/respondeai.svg","assets/img/filomoderna.svg","assets/img/memeriagourmet.svg" ]
    return(
        <div class="stories">

          {users.map((user, index)=> <Story user={user} source={profileImages[index]} />)}
          

          <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
          </div>
        
        </div>
    );
}
function Story(props){
    return(
    <div class="story">
        <div class="imagem">
          <img src={props.source} />
        </div>
        <div class="usuario">
          {props.user}
        </div>
    </div>
    );
}
export default Stories;