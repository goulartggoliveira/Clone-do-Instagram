function Sugestao(props) {
  return (
    <div class="sugestao">
      <div class="usuario">
        <img src={props.usuario} />
        <div class="texto">
          <div class="nome">{props.name}</div>
          <div class="razao">{props.razao}</div>
        </div>
      </div>

      <div class="seguir">Seguir</div>
    </div>
  );
}

export default function Sugestoes() {
  const sugestoes = [
    {
      nome: "bad.vibes.memes",
      usuario: "assets/img/bad.vibes.memes.svg",
      razao: "Segue você",
    },
    {
      nome: "chibirdart",
      usuario: "assets/img/chibirdart.svg",
      razao: "Segue você",
    },
    {
      nome: "razoesparaacreditar",
      usuario: "assets/img/razoesparaacreditar.svg",
      razao: "Novo no Instagram",
    },
    {
      nome: "adorable_animals",
      usuario: "assets/img/adorable_animals.svg",
      razao: "Segue você",
    },
    {
      nome: "smallcutecats",
      usuario: "assets/img/smallcutecats.svg",
      razao: "Segue você",
    },
  ];

  return (
    <div class="sugestoes">
      <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>

      {sugestoes.map((s) => (
        <Sugestao nome={s.nome} usuario={s.usuario} razao={s.razao} />
      ))}
    </div>
  );
}
