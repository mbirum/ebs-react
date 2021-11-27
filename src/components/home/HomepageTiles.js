import './css/HomepageTiles.css';
import './css/HomepageTiles-700.css';
import React from 'react';
import { Link } from 'react-router-dom';

function HomepageTiles() {

  return (
    <div id="homepageTiles">
        <table id="homepageTileTable">
            <tbody>
                <tr>
                    <td className="homepage-tile-column">
                        <Link to="/shop" state={{ initialCategory: "All" }} >
                            <img className="homepage-tile-image" src="originals-tile.png" />
                            <p className="tile-header">Original Artwork</p>
                        </Link>

                    </td>
                    <td className="homepage-tile-column">
                        <img className="homepage-tile-image" src="prints-tile.png" />
                        <p className="tile-header">Prints</p>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  );
}

export default HomepageTiles;