export default function Usuario(props) {
  return (
    <div class="usuario">
      <img src={props.imagem} />
      <div class="texto">
        <strong>{props.nome}</strong>
        <span>
          {props.nick}
          <ion-icon name="pencil"></ion-icon>
        </span>
      </div>
    </div>
  );
}
