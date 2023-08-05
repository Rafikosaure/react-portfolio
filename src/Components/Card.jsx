import '../Styles/Styles.css';

function Card({ project }) {
  return (
    <table className="col-portfolio" style={{ display: "inline-flex" }}>
      <tbody>
        <tr>
          <td>
            <div className="barre-verticale" />
          </td>
          <td style={{ width: "100%" }}>
            <a href="#">
              <img className='image-bordered' style={{ width: "100%" }} alt='Couverture du projet' src={project.cover} />
            </a>
          </td>
        </tr>
        <tr>
          <td />
          <td align="center">
            <a href='#'>{project.shortTitle}</a>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Card;
