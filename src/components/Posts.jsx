import { useState } from "react";

function Post(props) {
  /* USE STATE DE SALVAR E DAR LIKE */
  const [salvarPost, setSalvarPost] = useState(true);
  const [like, setLike] = useState(false);
  const [numeroCurtidas, setNumeroCurtidas] = useState(props.curtidas);

  function botaoSalvar() {
    setSalvarPost(!salvarPost);
  }

  function darLike() {
    if (!like) {
      setNumeroCurtidas(numeroCurtidas + 1);
      setLike(true);
    } else {
      setNumeroCurtidas(numeroCurtidas - 1);
      setLike(false);
    }
  }

  function darLikeImagem() {
    if (!like) {
      setLike(true);
      setNumeroCurtidas(numeroCurtidas + 1);
    }
  }

  return (
    <div class="post">
      <div class="topo">
        <div class="usuario">
          <img src={props.usuarioimg} />
          {props.usuarionome}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div onDoubleClick={darLikeImagem} class="conteudo">
        <img src={props.conteudo} />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            {like ? (
              <ion-icon
                onClick={darLike}
                class="curtido"
                name="heart"
              ></ion-icon>
            ) : (
              <ion-icon onClick={darLike} name="heart-outline"></ion-icon>
            )}

            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            {salvarPost ? (
              <ion-icon
                onClick={botaoSalvar}
                name="bookmark-outline"
              ></ion-icon>
            ) : (
              <ion-icon onClick={botaoSalvar} name="bookmark"></ion-icon>
            )}
          </div>
        </div>

        <div class="curtidas">
          <img src={props.curtidasimg} />
          <div class="texto">
            Curtido por <strong>{props.curtidasnome}</strong> e{" "}
            <strong>outras {numeroCurtidas} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Posts() {
  const posts = [
    {
      usuarioimg: "assets/img/meowed.svg",
      usuarionome: "meowed",
      conteudo: "assets/img/gato-telefone.svg",
      curtidasimg: "assets/img/respondeai.svg",
      curtidasnome: "respondeai",
      curtidas: 101523,
    },
    {
      usuarioimg: "assets/img/barked.svg",
      usuarionome: "barked",
      conteudo: "assets/img/dog.svg",
      curtidasimg: "assets/img/adorable_animals.svg",
      curtidasnome: "adorable_animals",
      curtidas: 99159,
    },
  ];

  return (
    <div class="posts">
      {posts.map((p) => (
        <Post
          usuarioimg={p.usuarioimg}
          usuarionome={p.usuarionome}
          conteudo={p.conteudo}
          curtidasimg={p.curtidasimg}
          curtidasnome={p.curtidasnome}
          curtidas={p.curtidas}
        />
      ))}
    </div>
  );
}
