import React, { useState } from "react";

export default function Usuario(props) {
  const [nick, setNovoNick] = useState(props.nick);
  const [imagemNova, setImagemNova] = useState(props.imagem);

  function mudaNick() {
    let novoNick = prompt(`Novo nick`);
    setNovoNick(novoNick);
  }

  function mudaImagem() {
    let novaImagem = prompt(`insira um link de foto`);
    setImagemNova(novaImagem);
  }

  return (
    <div class="usuario">
      <img onClick={mudaImagem} src={imagemNova} />
      <div class="texto">
        <strong>{props.nome}</strong>
        <span>
          {nick}
          <ion-icon onClick={mudaNick} name="pencil"></ion-icon>
        </span>
      </div>
    </div>
  );
}
