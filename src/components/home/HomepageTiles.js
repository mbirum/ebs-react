import './css/HomepageTiles.css';
import './css/HomepageTiles-700.css';
import React from 'react';
import { Link } from 'react-router-dom';

function HomepageTiles() {

  return (
    <div id="homepageTiles">
        <h2 id="homepageTilesHeader">Shop Categories</h2>
        <table id="homepageTileTable">
            <tbody>
                <tr>
                    <td className="homepage-tile-column">
                        <Link to="/shop" state={{ initialCategory: "All" }} >
                            <img alt="Original Artwork" className="homepage-tile-image" src="originals-tile.png" />
                            <p className="tile-header">Original Artwork</p>
                        </Link>

                    </td>
                    <td className="homepage-tile-column">
                        <Link to="/shop" state={{ initialCategory: "Ornaments" }} >
                            <img alt="Ornaments" className="homepage-tile-image" src="ornaments-tile.png" />
                            <p className="tile-header">Ornaments</p>
                        </Link>
                    </td>
                    <td className="homepage-tile-column">
                        <img alt="Prints" className="homepage-tile-image" src="prints-tile.png" />
                        <p className="tile-header">Prints</p>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  );
}

export default HomepageTiles;