import { FC } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { StationMarker } from "./MapMarker";

const styles = {
  height: "100%",
  minHeight: "400px",
  zIndex: 1
};

const coordinates: [number, number] = [41.31286390094148, 69.24438328843463];
const address = " Tashkent, 18 А Navoi Avenue (Landmark: Tech University)";

export const Map: FC = () => {

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
      <StationMarker position={coordinates} address={address} />
    </MapContainer>
  );
};
