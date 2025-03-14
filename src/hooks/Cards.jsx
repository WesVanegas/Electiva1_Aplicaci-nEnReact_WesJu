export const Card = ({name, image, link }) => {
  return (
    <>
      <div class="card">
        <div class="name">{name}</div>

        <div class="body">
          <img src={image} alt={name} />
          
        </div>

        <div class="pie">
          <a href={link}>More information</a>
        </div>
      </div>
    </>
  );
};
