import { FC } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const styles = {
  height: "100%",
  zIndex: 1
};

export const Map: FC = () => {
  const coordinates: [number, number] = [41.31286390094148, 69.24438328843463];

  return (
    <MapContainer
      style={styles}
      center={coordinates}
      zoom={13}
    >
      <TileLayer
        attribution=""
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={coordinates}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};
